import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { PricingTable } from ".";

describe("Table Component", () => {
  const sortData = [
    ["Names", "Pkg1", "Pkg2", "Pkg3"],
    ["Price (€)", "5", "50", "100"],
    ["Description", "Pkg1 description", "Pkg2 description", "Pkg3 description"],
    ["", "", "", ""],
    ["Application Intergrations", "", "", ""],
    ["Install custom apps", "X", "-", "-"],
    ["Install new apps", "-", "X", "X"],
    ["", "", "", ""],
    ["Blog", "", "", ""],
    ["Create your own blog", "X", "X", "X"],
    ["Upload Images", "-", "X", "X"],
    ["", "", "", ""],
    ["File Storage", "", "", ""],
    ["Share files with team", "X", "X", "X"],
    ["Upload files", "-", "X", "-"],
    ["Watch Videos", "-", "-", "-"],
    ["", "", "", ""],
    ["Reporting", "", "", ""],
    ["Create your own reports", "X", "X", "X"],
    ["Detailed Reports", "-", "X", "X"],
    ["Weekly Data Reports", "-", "X", "X"],
  ];
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({ PricingTable: { data: sortData } });
  it("render Table component", () => {
    const { container } = render(
      <Provider store={store}>
        <PricingTable />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
