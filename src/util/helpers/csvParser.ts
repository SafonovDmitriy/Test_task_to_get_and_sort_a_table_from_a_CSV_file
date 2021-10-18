import Papa from "papaparse";

export default async function csvParser(path: string) {
  const response = await fetch(path);
  const result = await response?.body?.getReader().read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result?.value);
  console.log(`csv`, csv);

  const { data }: { data: string[][] } = Papa.parse(csv, {
    delimiter: ",",
  });
  return data;
}
