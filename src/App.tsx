import Papa from "papaparse";
import React, { FC, useEffect, useState } from "react";
import { useTable } from "react-table";
import "./App.css";
interface mainConfig {
  [k: string]: string[];
}
interface ITableData {
  [k: string]: string[] | mainConfig;
}
const App: FC = () => {
  const [tableData, setTableData] = useState<any>({});
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
  ];
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });

  useEffect(() => {
    const fetchCsv = async () => {
      const response = await fetch(
        "data/Pricing Table Code Challenege ea845498b6f844d89f6fa14c522f787e.csv"
      );
      const reader = response?.body?.getReader();
      const result = await reader?.read();

      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value);

      const data = Papa.parse(csv, {
        delimiter: ",",
      });
      let isCategory = false;
      const _data: any[] = data.data;
      let saveCategory: string = "";

      setTableData(
        _data.reduce((acc, item) => {
          if (!String(item[0]).trim().length) {
            isCategory = true;

            if (acc.category) {
              return acc;
            } else {
              return Object.assign(acc, { category: {} });
            }
          }
          if (String(item[0]).trim().length && !String(item[1]).trim().length) {
            saveCategory = item[0];

            return Object.assign(acc, {
              category: { ...acc.category, [saveCategory]: [] },
            });
          }
          if (isCategory) {
            for (var i = 1; i < Object.keys(item).length; i++) {
              if (item[i] === "X") {
                item[i] = "✖";
              }
            }
            acc.category[saveCategory].push({
              [item[0]]: [item[1], item[2], item[3]],
            });
            return acc;
          } else {
            return Object.assign(acc, {
              [item[0]]: [item[1], item[2], item[3]],
            });
          }
        }, {})
      );
    };
    fetchCsv();
  }, []);
  const showTable = () => {
    const _JSXTable = [];
    console.log(`tableData`, tableData);
    for (var key in tableData) {
      if (Array.isArray(tableData[key])) {
        _JSXTable.push(
          <div className="row">
            <span>{key}</span>
            {tableData[key].map((item: any, idx: number) => (
              <span>{item}</span>
            ))}
          </div>
        );
      }
    }
    return _JSXTable;
  };

  return Object.keys(tableData).length ? (
    <div className="app_wrapper">
      <table>{showTable()}</table>
    </div>
  ) : null;
};

export default App;
