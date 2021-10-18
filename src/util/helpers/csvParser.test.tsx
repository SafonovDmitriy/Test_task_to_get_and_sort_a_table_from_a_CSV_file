import { TextDecoder } from "util";
import csvParser from "./csvParser";

//@ts-ignore
global.TextDecoder = TextDecoder;
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

describe("scvSorting", () => {
  it("return data for render table", async () => {
    const data = await csvParser("/data/data.csv");
    expect(data.length).not.toBe(0);
  });
});
