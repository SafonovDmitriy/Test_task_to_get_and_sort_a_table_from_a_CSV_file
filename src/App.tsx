import React, { FC } from "react";
import "./App.css";
import { PricingTable } from "./components/PricingTables";

const App: FC = () => (
  <div className="app_wrapper">
    <PricingTable />
  </div>
);

export default App;
