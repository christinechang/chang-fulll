import React, {ReactElement} from "react";
import { TilesProps } from "./TileInterfaces";
import "./Tiles.css";

import Tile from "./Tile";

const Tiles = ({ tileList, handleCheck, checkboxes, editMode}: TilesProps ): ReactElement => {
  return (
    <div className="tiles">
      {tileList.map((t, idx) => (
        <Tile editMode={editMode} tileInfo={t} checkbox={checkboxes[idx]} handleCheck={handleCheck} idx={idx} key={`t-${t.id}-${idx}`}></Tile>
      ))}
    </div>
  );
};

export default Tiles;
