import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as fetchDataForPricingTable from "../../redux/actions/pricingTablesActions";
import * as dataForPricingTableSelector from "../../redux/selectors";
import PricingTable from "./PricingTable";
import PricingTableContainer from "./PricingTableContainer";

const sortData = [
  ["Names", "Pkg1", "Pkg2", "Pkg3"],
  ["Price (€)", "5", "50", "100"],
  ["Description", "Pkg1 description", "Pkg2 description", "Pkg3 description"],
  ["Application Intergrations", "", "", ""],
  ["Install custom apps", "X", "-", "-"],
  ["Install new apps", "-", "X", "X"],
  ["Blog", "", "", ""],
  ["Create your own blog", "X", "X", "X"],
  ["Upload Images", "-", "X", "X"],
  ["File Storage", "", "", ""],
  ["Share files with team", "X", "X", "X"],
  ["Upload files", "-", "X", "-"],
  ["Watch Videos", "-", "-", "-"],
  ["Reporting", "", "", ""],
  ["Create your own reports", "X", "X", "X"],
  ["Detailed Reports", "-", "X", "X"],
  ["Weekly Data Reports", "-", "X", "X"],
];

describe("Pricing Table Presentation Component", () => {
  it("render Pricing Presentation Table component", () => {
    const pricingTable = renderer.create(
      <PricingTable dataForPricingTable={sortData} />
    );
    expect(pricingTable.toJSON()).toMatchSnapshot();
  });
});

describe("Pricing Table Container Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const middlewares = [thunk];
  const initialStore = { pricingTable: { data: [] } };
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialStore);

  it("Pricing Table component with sortData", async () => {
    jest
      .spyOn(dataForPricingTableSelector, "dataForPricingTableSelector")
      .mockReturnValue(sortData);
    const pricingTable = renderer.create(
      <Provider store={store}>
        <PricingTableContainer />
      </Provider>
    );

    expect(pricingTable.toJSON()).not.toBe(null);
  });

  it("Pricing Table component with empty data", async () => {
    jest
      .spyOn(dataForPricingTableSelector, "dataForPricingTableSelector")
      .mockReturnValue([]);

    const fetchDataForPricingTableSpy = jest.spyOn(
      fetchDataForPricingTable,
      "fetchDataForPricingTable"
    );

    const pricingTable = renderer.create(
      <Provider store={store}>
        <PricingTableContainer />
      </Provider>
    );

    expect(pricingTable.toJSON()).toBe(null);
    expect(fetchDataForPricingTableSpy).toBeCalled();
  });
});
