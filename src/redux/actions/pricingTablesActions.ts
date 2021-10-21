import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import csvParser from "../../helpers/csvParser";
import csvSorting from "../../helpers/csvSorting";
import { pricingTableActionTypes } from "../actionTypes/pricingTable";

import { RootType } from "../store";

export const setDataForPricingTableAction = (payload: string[][]) => ({
  type: pricingTableActionTypes.SET_DATA_FOR_PRICING_TABLES,
  payload,
});

export const fetchDataForPricingTable =
  () => async (dispatch: ThunkDispatch<RootType, undefined, Action>) => {
    try {
      const dataForPricingTable: Array<string[]> = await csvParser(
        "data/data.csv"
      );
      const sortData: Array<string[]> = csvSorting(dataForPricingTable);
      dispatch(setDataForPricingTableAction(sortData));
    } catch (error) {
      console.log(`error`, error);
    }
  };
