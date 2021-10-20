import { FC } from "react";
import { SYMBOLS_MAP } from "../../constants";
import "./PricingTablesStyle.css";

const checkIfGroup = (tr: string[]): boolean =>
  tr.filter((item) => item).length === 1;

interface IPricingTablesProps {
  dataForPricingTables: Array<string[]>;
}

const PricingTables: FC<IPricingTablesProps> = ({ dataForPricingTables }) => (
  <table className="app_table">
    <tbody>
      {dataForPricingTables.map((tr, idxTr) => (
        <tr key={idxTr} className={checkIfGroup(tr) ? "boldText" : ""}>
          {tr.map((td, idxTd) => (
            <td key={`${idxTr}-${idxTd}`}>{SYMBOLS_MAP[td] || td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default PricingTables;
