import React, {ReactElement} from "react";
import { TilesProps } from "./TileInterfaces";
import "./Tiles.css";

import Tile from "./Tile";

const Tiles = ({ tileList, handleCheck, editMode}: TilesProps ): ReactElement => {
  return (
    <div className="tiles">
      {tileList.map((t, idx) => (
        <Tile editMode={editMode} tileInfo={t} handleCheck={handleCheck} idx={idx} key={`t-${t.id}-${idx}`}></Tile>
      ))}
    </div>
  );
};

export default Tiles;
