import { IRow } from "../../redux/actionInterfaces/table";

let categiryTitle: string = "";
const newData: string[][] = [];
const scvSorting = (data: string[][]) => {
  let categoriesList = data.reduce((acc, item: string[]) => {
    if (!lengthArray(item)) {
      return acc;
    }
    if (lengthArray(item) === 1) {
      categiryTitle = item[0];
      acc.push([categiryTitle, []]);
    }

    if (!categiryTitle) {
      newData.push(item);
      return acc;
    }
    if (lengthArray(item) > 1) {
      const itemIndex = acc.findIndex(
        (item: IRow) => item[0] === categiryTitle
      );
      acc[itemIndex][1].push(item);
    }

    return acc;
  }, [] as [string, string[][]][]);

  for (var value of categoriesList.sort((a: IRow, b: IRow) => mySort(a, b))) {
    value[1].sort((a: string[], b: string[]) => mySort(a, b));
    newData.push(["", "", "", ""], [value[0], "", "", ""], ...value[1]);
  }
  return newData;
};

const lengthArray = (array: string[]) =>
  array.filter((item) => item.length && item).length;

const mySort = (a: IRow | string[], b: IRow | string[]) => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

export default scvSorting;
