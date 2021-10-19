import Papa from "papaparse";

const csvParser = async (path: string) => {
  const response = await fetch(path);
  const result = await response?.body?.getReader().read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result?.value);

  const { data }: { data: string[][] } = Papa.parse(csv, {
    delimiter: ",",
    skipEmptyLines: "greedy",
  });
  return data;
};
export default csvParser;
