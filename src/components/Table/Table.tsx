import { useSelector } from "react-redux";
import { dataForTableSelector } from "../../redux/selectors";
import "./TableStyle.css";
const Table = () => {
  const data: string[][] = useSelector(dataForTableSelector);
  return (
    <table className="app_table">
      <tbody>
        {data.map((tr, idxTr) => (
          <tr key={idxTr}>
            {tr.map((td, idxTd) => (
              <td key={`${idxTr}-${idxTd}`}>{td === "X" ? "\u274C" : td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
