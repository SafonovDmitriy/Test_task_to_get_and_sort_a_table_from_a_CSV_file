import { PRICING_TABLE_ACTION_TYPE_ENUM } from "../actionTypes/pricingTable";
import { IFetchDataForPricingTable, ITableState } from "../interfaces";

const initialState: ITableState = {
  data: [],
};

export const PricingTableReducer = (
  state = initialState,
  action: IFetchDataForPricingTable
) => {
  switch (action.type) {
    case PRICING_TABLE_ACTION_TYPE_ENUM.SET_DATA_FOR_PRICING_TABLE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
