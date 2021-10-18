import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Table } from "./components";
import { fetchData } from "./redux/actions/table";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="app_wrapper">
      <Table />
    </div>
  );
};

export default App;
