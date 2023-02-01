import React, { ReactElement, useEffect, useState, ChangeEvent } from "react";
import "../App.css";
import Tiles from "./Tiles/Tiles";
import { TileType } from "./Tiles/TileInterfaces";
import Header from "./Header";
import IconBand from "./IconBand";
import SearchBox from "./SearchBox/SearchBox";

const GitSearch = (): ReactElement => {
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState(
    searchText ? `https://api.github.com/search/users?q=${searchText}` : ""
  );

  const [userData, setUserData] = useState<TileType[]>([]);
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);
  const [checkCount, setCheckCount] = useState(0);
  const [checkAll, setCheckAll] = useState(false);

  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    // const newCheckboxes = userData.map((d) => (false));
    setCheckboxes(userData.map((d) => (false)));
    setCheckAll(false);
  }, [userData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setUrl(
      searchText ? `https://api.github.com/search/users?q=${searchText}` : ""
    ); // searchText in all elements
  };

  const handleCheckboxChange = (idx: number) => {
    const newCheckCount = checkCount + (checkboxes[idx] ? -1 : 1); // reduce check count
    setCheckAll(newCheckCount === userData.length); // if all checked, set checkAll to true
    setCheckCount(newCheckCount);

    setCheckboxes(checkboxes.map((cb, key) => key === idx ? !cb : cb));
  };

  const handleDelete = () => {
    const filteredData = userData.filter((d,idx) => !checkboxes[idx]);
    setUserData([...filteredData]);
    setCheckCount(0);
    setCheckAll(false);
  };

  const handleDupe = () => {
    const selectedUsers = userData.filter((d,idx) => checkboxes[idx]);
    const newUsers = [...userData, ...selectedUsers].map((n) => ({
      ...n,
      checkbox: false,
    }));
    setUserData([...newUsers]);
    setCheckCount(0);
    setCheckAll(false);
  };

  const handleCheckAll = () => {
    const newChecks = checkboxes.map((cb) => (!checkAll));
    setCheckboxes(newChecks);
    setCheckCount(!checkAll ? checkboxes.length : 0);
    setCheckAll(!checkAll);
  };
  
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const processData = (data: any) => {
    const procdData: TileType[] =
      data.items.length > 0
        ? data.items.map((d: TileType) => ({
            name: d.login,
            avatar_url: d.avatar_url,
            id: d.id,
            login: d.login,
            url: d.url,
            check: false,
          }))
        : [];
    setUserData([...procdData]);
  };

  useEffect(() => {
    const fetchData = async () => {
      // define async function first then call it
      if (url) {
        // only fetch if valid url from valid searchText
        const response = await fetch(url);
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          console.log(message);
          throw new Error(message);
        }
        // const data = await response.json();
        const data = JSON.parse(await response.text());
      
        processData(data); // use data in processData function after await
      } else {
        // otherwise reset userData
        setUserData([]);
      }
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch((error) => {
        console.log("error: ", error.message);
        error.message;
      });
  }, [url]);

  return (
    <div className="main">
      <Header />
      <SearchBox
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        searchText={searchText}
      />
      <IconBand
        checkCount={checkCount}
        checkAll={checkAll}
        editMode={editMode}
        handleDupe={handleDupe}
        handleDelete={handleDelete}
        handleCheckAll={handleCheckAll}
        handleEdit={handleEdit}
      />
      <div className="resultsContainer" data-testid="results">
        {userData && userData.length ? (
          <Tiles
            tileList={userData}
            checkboxes={checkboxes}
            handleCheck={handleCheckboxChange}
            editMode={editMode}
          />
        ) : (
          <h3>No data</h3>
        )}
      </div>
    </div>
  );
};

export default GitSearch;
