import { setDataForPricingTableAction } from "../actions/pricingTablesActions";
import { PricingTableReducer } from "./pricingTableReducer";

describe("Pricing Table reducer", () => {
  const store = { data: [] };
  const data = [
    ["Names", "Pkg1", "Pkg2", "Pkg3"],
    ["Price (€)", "5", "50", "100"],
    ["Description", "Pkg1 description", "Pkg2 description", "Pkg3 description"],
  ];
  it("Wether Action fetch_data works", async () => {
    const newState = PricingTableReducer(
      store,
      setDataForPricingTableAction(data)
    );
    expect(newState.data.length).not.toBe(0);
  });
});
