import "./TableStyle.css";
const Table = ({ data }: { data: string[][] }) => (
  <table className="app_table">
    <tbody>
      {data.map((tr, idxTr) => (
        <tr key={idxTr}>
          {tr.map((td, idxTd) => (
            <td key={`${idxTr}-${idxTd}`}>{td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
export default Table;
