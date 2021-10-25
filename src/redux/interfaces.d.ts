import { PRICING_TABLE_ACTION_TYPE_ENUM } from "./actionTypes/pricingTable";

export interface ITableState {
  data: Array<string[]>;
}
export interface IFetchDataForPricingTable {
  type: PRICING_TABLE_ACTION_TYPE_ENUM;
  payload: Array<string[]>;
}
