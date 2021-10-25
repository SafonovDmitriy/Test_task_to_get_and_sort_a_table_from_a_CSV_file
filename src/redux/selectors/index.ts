import { RootType } from "../store";

export const dataForPricingTableSelector = (state: RootType): Array<string[]> =>
  state.pricingTable.data;
