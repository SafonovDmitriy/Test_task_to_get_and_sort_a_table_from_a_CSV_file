import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Table } from "./components";
import { fetchData } from "./redux/actions/table";
import { dataForTableSelector } from "./redux/selectors";

const App = () => {
  const dataTable: string[][] = useSelector(dataForTableSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return dataTable.length ? (
    <div className="app_wrapper">
      <Table data={dataTable} />
    </div>
  ) : null;
};

export default App;
