import { tableActionTypes } from "../actionTypes/table";

export type IAction = IFetchData | ISetLoading;

export interface ITableState {
  loading: boolean;
  data: string[][];
}
export type IRow = [string, string[][]];
export interface IFetchData {
  type: tableActionTypes.FETCH_DATA;
  payload: string[][];
}
export interface ISetLoading {
  type: tableActionTypes.SET_LOADING;
  payload: boolean;
}
