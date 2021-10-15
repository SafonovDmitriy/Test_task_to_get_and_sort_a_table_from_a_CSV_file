import { TextDecoder } from "util";
import svcParser from "./svcParser";

//@ts-ignore
global.TextDecoder = TextDecoder;
describe("scvSorting", () => {
  it("return data for render table", async () => {
    const data = await svcParser("/data/data.csv");
    console.log(`data`, data);
    expect(data.length).not.toBe(0);
  });
});
