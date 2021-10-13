import Papa from "papaparse";
import React, { FC, useEffect, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [tableData, setTableData] = useState<any>([]);
  console.log(`tableData`, tableData);
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
      console.log(`_data`, _data);

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
            console.log(
              `acc.category[saveCategory]`,
              acc.category[saveCategory]
            );
            console.log(` [item[0]]: [item[1], item[2], item[3]]`, {
              [item[0]]: [item[1], item[2], item[3]],
            });

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

  // console.log(`tableData`, tableData);
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({
  //     columns,
  //     data,
  //   });
  return <div className="app_wrapper"></div>;
};

export default App;
