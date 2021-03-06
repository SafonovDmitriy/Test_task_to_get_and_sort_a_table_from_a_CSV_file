import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
describe("App Component", () => {
  it("renders App component", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
