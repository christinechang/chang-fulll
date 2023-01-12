import { ChangeEventHandler } from "react";

export interface TileType {
  name: string;
  avatar_url: string | null;
  id: number;
  login: string | null;
  url: string | undefined;
  check: boolean;
  editMode: boolean;
}

export interface TileProps {
  tileInfo: TileType;
  handleCheck: Function;
  idx: number;
  editMode: boolean;
}
export interface TilesProps {
  tileList: TileType[];
  handleCheck: Function;
  editMode: boolean;
}
