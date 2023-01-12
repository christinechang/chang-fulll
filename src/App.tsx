import React, { ReactElement, useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import Tiles from "./components/Tiles/Tiles";
import { TileType } from "./components/Tiles/TileInterfaces";
import Header from "./components/Header";
import IconBand from "./components/IconBand";
import SearchBox from "./components/SearchBox/SearchBox";

const App = (): ReactElement => {
  const [searchText, setSearchText] = useState("");
  const [url, setUrl] = useState(
    searchText ? `https://api.github.com/search/users?q=${searchText}` : ""
  );

  const [userData, setUserData] = useState<TileType[]>([]);
  const [checkCount, setCheckCount] = useState(0);
  const [checkAll, setCheckAll] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setUrl(
      searchText ? `https://api.github.com/search/users?q=${searchText}` : ""
    ); // searchText in all elements
  };

  const handleCheckBox = (id: number) => {
    setCheckCount(checkCount + (userData[id].check ? -1 : 1));
    userData[id].check = !userData[id].check; //ok to change state because creating new array next?
    setUserData([...userData]);
  };

  const handleDelete = () => {
    const filteredData = userData.filter((d) => !d.check);
    setUserData([...filteredData]);
    setCheckCount(0);
  };

  const handleDupe = () => {
    const selectedUsers = userData.filter((d) => d.check);
    const newUsers = [...userData, ...selectedUsers].map((n) => ({ ...n, check: false }));
    setUserData([...newUsers]);
    setCheckCount(0);
  };

  const handleCheckAll = () => {
    const newUsers = userData.map((d) => ({...d, check: !checkAll}));
    setUserData([...newUsers]);
    setCheckCount(!checkAll ? userData.length : 0);
    setCheckAll(!checkAll);
  }
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

  useEffect(
    function effectFunction() {
      if (url) {
        // only fetch if valid url from valid searchText
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            processData(data);
          })
          .catch((err) => {
            console.log("Fetch ERROR.......", err);
          });
      } else {
        // otherwise reset userData
        setUserData([]);
      }
    },
    [url]
  );

  return (
    <div className="App">
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
          handleCheckAll ={handleCheckAll}
          handleEdit={handleEdit}
        />
        <div className="resultsContainer" data-testid="results">
          {userData.length > 0 ? (
            <Tiles tileList={userData} handleCheck={handleCheckBox} editMode={editMode}/>
          ) : (
            <h3>No data</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
