import { render } from "@testing-library/react";
import React from "react";

import { Table } from "..";
describe("Table", () => {
  it("render Table without crash", () => {
    const data = [["test", "test", "test", "test"]];
    const { container } = render(<Table data={data} />);
    expect(container).toBeInTheDocument();
  });
});
