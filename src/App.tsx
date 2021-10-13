import Papa from "papaparse";
import React, { FC, useEffect, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [tableData, setTableData] = useState<any>([]);
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
      const test = _data.reduce((acc, item) => {
        if (!String(item[0]).trim().length) {
          isCategory = true;
          return acc;
        }
        if (isCategory) {
          console.log(isCategory);
          return Object.assign(acc, {
            category: { [item[0]]: [item[1], item[2], item[3]] },
          });
        } else {
          return Object.assign(acc, {
            [item[0]]: [item[1], item[2], item[3]],
          });
        }
      }, {});
      console.log(`test`, test);
    };
    fetchCsv();
  }, []);

  // console.log(`tableData`, tableData);
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });
  return <div className="app_wrapper"></div>;
};

export default App;
