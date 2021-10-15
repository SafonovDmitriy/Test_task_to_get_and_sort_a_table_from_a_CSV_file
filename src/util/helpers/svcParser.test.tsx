import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import svcParser from "./svcParser";
import { TextEncoder, TextDecoder } from "util";

//@ts-ignore
global.TextDecoder = TextDecoder;
describe("scvSorting", () => {
  //   it("return data for render table", async () => {
  //     const data = await svcParser("/data/data.csv");
  //     console.log(`data`, data);
  //   });
});
