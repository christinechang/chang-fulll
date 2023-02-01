import React, { ReactElement, useEffect } from "react";
import { TileProps } from "./TileInterfaces";
import Checkbox from "../Checkbox/Checkbox";

const Tile = ({
  tileInfo,
  checkbox,
  handleCheck,
  idx,
  editMode,
}: TileProps): ReactElement => (
    <div className="tile" key={`${tileInfo.id}-${idx}`}>
      <Checkbox
        editMode={editMode}
        handleCheck={() => {
          handleCheck(idx);
        }}
        checked={checkbox}
      />
      <div className="tile__body">
        <div className="flexCentered">
          <img
            className="tile__profImg"
            src={tileInfo.avatar_url || ""}
            alt="profile avatar"
          ></img>
        </div>
        <div className="tile__details">
          <p>{tileInfo.id}</p>
          <p>{tileInfo.login}</p>
        </div>
        <div className="flexCentered">
          <a className="tile__button" href={tileInfo.url}>
            <span>View Profile</span>
          </a>
        </div>
      </div>
    </div>
  );

export default Tile;

/*
const Tile = ({ id, checked, handleCheckboxChange }) => {
  useEffect(() => {
    console.log(`Tile ${id} re-rendered`);
  }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={e => handleCheckboxChange(e.target.checked, id)}
      />
    </div>
  );
};

const TileContainer = () => {
  const [tiles, setTiles] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false }
  ]);

  const handleCheckboxChange = (isChecked, id) => {
    const updatedTiles = tiles.map(tile => {
      if (tile.id === id) {
        return { ...tile, checked: isChecked };
      }
      return tile;
    });
    setTiles(updatedTiles);
  };

  return (
    <div>
      {tiles.map(tile => (
        <Tile
          key={tile.id}
          id={tile.id}
          checked={tile.checked}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default TileContainer;
*/