import { setDataForPricingTablesAction } from "../actions/pricingTablesActions";
import { pricingTablesReducer } from "./pricingTablesReducer";

describe("Pricing Tables reducer", () => {
  const store = { data: [] };
  const data = [
    ["Names", "Pkg1", "Pkg2", "Pkg3"],
    ["Price (€)", "5", "50", "100"],
    ["Description", "Pkg1 description", "Pkg2 description", "Pkg3 description"],
  ];
  it("Whether Action fetch_data works", async () => {
    const newState = pricingTablesReducer(
      store,
      setDataForPricingTablesAction(data)
    );
    expect(newState.data.length).not.toBe(0);
  });
});
