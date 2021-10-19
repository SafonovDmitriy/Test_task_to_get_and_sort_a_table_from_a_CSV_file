import { tableActionTypes } from "../actionTypes/table";

export type IAction = IFetchData;

export interface ITableState {
  data: string[][];
}
export type IRow = [string, string[][]];

export interface IFetchData {
  type: tableActionTypes.FETCH_DATA;
  payload: string[][];
}
