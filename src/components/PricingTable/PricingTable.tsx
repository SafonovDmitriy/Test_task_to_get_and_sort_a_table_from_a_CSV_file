import { FC } from "react";
import "./PricingTableStyle.css";

interface IPricingTableProps {
  dataForPricingTable: Array<string[]>;
}

const PricingTable: FC<IPricingTableProps> = ({ dataForPricingTable }) => {
  const checkIfGroup = (tr: string[]): boolean =>
    tr.filter((item) => item).length === 1;

  const renderCheckMark = () => <span className="checkMark">&#10003;</span>;

  return (
    <table className="app_table">
      <tbody>
        {dataForPricingTable.map(
          (
            row,
            rowIdx // It uses a cycle iteration index as a key due to the fact that this massif never mutates
          ) => (
            <tr key={rowIdx} className={checkIfGroup(row) ? "boldText" : ""}>
              {row.map(
                (
                  cell,
                  cellIdx // It uses a cycle iteration index as a key due to the fact that this massif never mutates
                ) => (
                  <td key={`${rowIdx}-${cellIdx}`}>
                    {cell === "X" ? renderCheckMark() : cell}
                  </td>
                )
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default PricingTable;
