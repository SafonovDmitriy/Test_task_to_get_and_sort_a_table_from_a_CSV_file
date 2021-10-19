import { useSelector } from "react-redux";
import { dataForTableSelector } from "../../redux/selectors";
import "./TableStyle.css";
const changeSymbol = (symbol: string) => {
  switch (symbol) {
    case "X":
      return "\u274C";
    case "-":
      return "\u2705";

    default:
      return symbol;
  }
};
const Table = () => {
  const data: string[][] = useSelector(dataForTableSelector);
  return (
    <table className="app_table">
      <tbody>
        {data.map((tr, idxTr) => (
          <tr key={idxTr}>
            {tr.map((td, idxTd) => (
              <td key={`${idxTr}-${idxTd}`}>{changeSymbol(td)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
