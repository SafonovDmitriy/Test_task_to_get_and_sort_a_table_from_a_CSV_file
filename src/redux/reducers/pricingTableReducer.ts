import {
  IFetchDataForPricingTable,
  ITableState,
} from "../actionInterfaces/pricingTable";
import { pricingTableActionTypes } from "../actionTypes/pricingTable";

const initialState: ITableState = {
  data: [],
};

export const PricingTableReducer = (
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
