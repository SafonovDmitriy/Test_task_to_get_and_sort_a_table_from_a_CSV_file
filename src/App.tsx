import React, { FC } from "react";
import "./App.css";
import { PricingTables } from "./components/PricingTables";

const App: FC = () => {
  return (
    <div className="app_wrapper">
      <PricingTables />
    </div>
  );
};

export default App;
