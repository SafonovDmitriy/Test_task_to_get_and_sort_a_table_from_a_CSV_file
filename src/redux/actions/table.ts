import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { csvParser, csvSorting } from "../../util";
import { tableActionTypes } from "../actionTypes/table";
import { RootType } from "../store";

export const fetchDataAction = (payload: string[][]) => ({
  type: tableActionTypes.FETCH_DATA,
  payload,
});

export const fetchData =
  () => async (dispatch: ThunkDispatch<RootType, undefined, Action>) => {
    try {
      const data = await csvParser("data/data.csv");
      const sortData = csvSorting(data);
      dispatch(fetchDataAction(sortData));
    } catch (error) {
      console.log(`error`, error);
    }
  };
