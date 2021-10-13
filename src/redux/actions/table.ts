import Papa from "papaparse";
import { ThunkDispatch } from "redux-thunk";
import { tableActionTypes } from "../actionTypes/table";
import { RootType } from "../store";

export const fetchDataAction = (payload: string[][]) => ({
  type: tableActionTypes.FETCH_DATA,
  payload,
});
export const setLoadingAction = (payload: boolean) => ({
  type: tableActionTypes.SET_LOADING,
  payload,
});
export const fetchData =
  () => async (dispatch: ThunkDispatch<RootType, undefined, any>) => {
    try {
      dispatch(setLoadingAction(true));

      const response = await fetch(
        "data/Pricing Table Code Challenege ea845498b6f844d89f6fa14c522f787e.csv"
      );
      const reader = response?.body?.getReader();
      const result = await reader?.read();

      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value);

      const { data }: { data: string[][] } = Papa.parse(csv, {
        delimiter: ",",
      });
      dispatch(fetchDataAction(data));
    } catch (error) {
      console.log(`error`, error);
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
