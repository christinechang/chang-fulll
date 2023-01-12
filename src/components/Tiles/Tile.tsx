import React, { ReactElement } from "react";
import { TileProps } from "./TileInterfaces";
import Checkbox from "../Checkbox/Checkbox";

const Tile = ({ tileInfo, handleCheck, idx, editMode }: TileProps): ReactElement => (
  <div className="tile" key={`${tileInfo.id}-${idx}`}>
    <Checkbox editMode={editMode} handleCheck={() => {handleCheck(idx)}} checked={tileInfo.check} />
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
