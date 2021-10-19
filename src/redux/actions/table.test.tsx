import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as csvParser from "../../util/helpers/csvParser";
import * as csvSorting from "../../util/helpers/csvSorting";
import { fetchData } from "./table";

const withoutSortData = [
  ["Names", "Pkg1", "Pkg2", "Pkg3"],
  ["Price (€)", "5", "50", "100"],
  ["Description", "Pkg1 description", "Pkg2 description", "Pkg3 description"],
  ["", "", "", ""],
  ["Reporting", "", "", ""],
  ["Detailed Reports", "-", "X", "X"],
  ["Weekly Data Reports", "-", "X", "X"],
  ["Create your own reports", "X", "X", "X"],
  ["", "", "", ""],
  ["Blog", "", "", ""],
  ["Create your own blog", "X", "X", "X"],
  ["Upload Images", "-", "X", "X"],
  ["", "", "", ""],
  ["File Storage", "", "", ""],
  ["Upload files", "-", "X", "-"],
  ["Share files with team", "X", "X", "X"],
  ["Watch Videos", "-", "-", "-"],
  ["", "", "", ""],
  ["Application Intergrations", "", "", ""],
  ["Install new apps", "-", "X", "X"],
  ["Install custom apps", "X", "-", "-"],
];
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
describe("table Actions", () => {
  const store = mockStore({ table: { data: [] } });

  it("action works out", () => {
    jest.spyOn(csvParser, "default").mockResolvedValue(withoutSortData);
    jest.spyOn(csvSorting, "default").mockReturnValue(sortData);
    //@ts-ignore
    store.dispatch(fetchData());
  });
  it("action csvParser return Error", () => {
    jest.spyOn(csvParser, "default").mockRejectedValue("mockError");
    //@ts-ignore
    store.dispatch(fetchData());
  });
});
