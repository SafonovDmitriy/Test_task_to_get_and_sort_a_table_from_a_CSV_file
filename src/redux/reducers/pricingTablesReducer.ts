import {
  IFetchDataForPricingTable,
  ITableState,
} from "../actionInterfaces/pricingTables";
import { pricingTableActionTypes } from "../actionTypes/pricingTables";

const initialState: ITableState = {
  data: [],
};

export const pricingTablesReducer = (
  state = initialState,
  action: IFetchDataForPricingTable
) => {
  switch (action.type) {
    case pricingTableActionTypes.SET_DATA_FOR_PRICING_TABLES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
