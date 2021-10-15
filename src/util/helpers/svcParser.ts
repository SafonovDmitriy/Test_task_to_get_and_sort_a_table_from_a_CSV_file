import Papa from "papaparse";

export default async function svcParser(path: string) {
  const response = await fetch(path);
  console.log(`response`, response);
  const result = await response?.body?.getReader().read();

  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result?.value);

  const { data }: { data: string[][] } = Papa.parse(csv, {
    delimiter: ",",
  });
  return data;
}
