import { FC } from "react";
import { SYMBOLS_MAP } from "../../constants";
import "./PricingTableStyle.css";

const checkIfGroup = (tr: string[]): boolean =>
  tr.filter((item) => item).length === 1;

interface IPricingTableProps {
  dataForPricingTable: Array<string[]>;
}

const PricingTable: FC<IPricingTableProps> = ({ dataForPricingTable }) => (
  <table className="app_table">
    <tbody>
      {dataForPricingTable.map((tr, idxTr) => (
        <tr key={idxTr} className={checkIfGroup(tr) ? "boldText" : ""}>
          {tr.map((td, idxTd) => (
            <td key={`${idxTr}-${idxTd}`}>{SYMBOLS_MAP[td] || td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default PricingTable;
