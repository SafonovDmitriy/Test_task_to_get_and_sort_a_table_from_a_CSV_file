import { RootType } from "../store";

export const dataForPricingTablesSelector = (state: RootType) =>
  state.pricingTables.data;
