import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import csvParser from "../../helpers/csvParser";
import csvSorting from "../../helpers/csvSorting";
import { pricingTableActionTypes } from "../actionTypes/table";
import { RootType } from "../store";

export const setDataForPricingTablesAction = (payload: string[][]) => ({
  type: pricingTableActionTypes.SET_DATA_FOR_PRICING_TABLES,
  payload,
});

export const fetchDataForPricingTables =
  () => async (dispatch: ThunkDispatch<RootType, undefined, Action>) => {
    try {
      const dataForPricingTables: Array<string[]> = await csvParser(
        "data/data.csv"
      );
      const sortData: Array<string[]> = csvSorting(dataForPricingTables);
      dispatch(setDataForPricingTablesAction(sortData));
    } catch (error) {
      console.log(`error`, error);
    }
  };
