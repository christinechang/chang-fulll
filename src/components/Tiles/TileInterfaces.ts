import { ChangeEventHandler } from "react";

export interface TileType {
  name: string;
  avatar_url: string | null;
  id: number;
  login: string | null;
  url: string | undefined;
  editMode: boolean;
}

export interface TileProps {
  tileInfo: TileType;
  checkbox: boolean;
  handleCheck: Function;
  idx: number;
  editMode: boolean;
}
export interface TilesProps {
  tileList: TileType[];
  checkboxes: boolean[];
  handleCheck: Function;
  editMode: boolean;
}

