import { IRow } from "../../redux/actionInterfaces/table";

let categiryTitle: string = "";
const newData: string[][] = [];
const csvSorting = (data: string[][]) => {
  let categoriesList = data.reduce((acc, item: string[]) => {
    if (!numberOfNotEmptyFields(item)) {
      return acc;
    }

    if (numberOfNotEmptyFields(item) === 1) {
      categiryTitle = item[0];
      acc.push([categiryTitle, []]);
    }

    if (!categiryTitle) {
      newData.push(item);
      return acc;
    }
    if (numberOfNotEmptyFields(item) > 1) {
      const itemIndex = acc.findIndex(
        (item: IRow) => item[0] === categiryTitle
      );
      acc[itemIndex][1].push(item);
    }

    return acc;
  }, [] as IRow[]);

  const assortedArrayByCategory = categoriesList.sort((a: IRow, b: IRow) =>
    mySort(a, b)
  );
  for (const value of assortedArrayByCategory) {
    value[1].sort((a: string[], b: string[]) => mySort(a, b));
    newData.push(["", "", "", ""], [value[0], "", "", ""], ...value[1]);
  }
  return newData;
};

const numberOfNotEmptyFields = (array: string[]): number =>
  array.filter((item) => item.length).length;

const mySort = (a: IRow | string[], b: IRow | string[]): number => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

export default csvSorting;
