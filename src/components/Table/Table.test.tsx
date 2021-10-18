import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

import { Table } from "..";
import store from "../../redux/store";
describe("Table", () => {
  it("render Table without crash", () => {
    const { container } = render(
      <Provider store={store}>
        <Table />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
