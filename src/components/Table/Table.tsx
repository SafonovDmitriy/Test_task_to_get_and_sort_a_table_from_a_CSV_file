const Table = ({ data }: { data: string[][] }) => (
  <tbody>
    {data.map((tr, idxTr) => (
      <tr key={idxTr}>
        {tr.map((td, idxTd) => (
          <td key={`${idxTr}-${idxTd}`}>{td}</td>
        ))}
      </tr>
    ))}
  </tbody>
);
export default Table;
