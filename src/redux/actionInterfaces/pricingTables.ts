import { pricingTableActionTypes } from "../actionTypes/table";

export interface ITableState {
  data: Array<string[]>;
}
export interface IFetchDataForPricingTable {
  type: pricingTableActionTypes.SET_DATA_FOR_PRICING_TABLES;
  payload: Array<string[]>;
}
