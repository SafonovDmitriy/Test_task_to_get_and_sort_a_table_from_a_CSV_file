import { RootType } from "../store";

export const dataForPricingTablesSelector = (
  state: RootType
): Array<string[]> => state.pricingTables.data;
