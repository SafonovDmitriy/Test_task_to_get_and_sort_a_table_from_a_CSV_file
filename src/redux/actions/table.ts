import { ThunkDispatch } from "redux-thunk";
import { scvSorting } from "../../util";
import svcParser from "../../util/helpers/svcParser";
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
      const data = await svcParser(
        "data/Pricing Table Code Challenege ea845498b6f844d89f6fa14c522f787e.csv"
      );
      dispatch(fetchDataAction(scvSorting(data)));
    } catch (error) {
      console.log(`error`, error);
    } finally {
      dispatch(setLoadingAction(false));
    }
  };
