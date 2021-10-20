const csvSorting = (
  notASortedArrayForPriceTable: Array<string[]>
): Array<string[]> => {
  let _categiryTitle: string = "";
  const newData: Array<string[]> = [];
  let categoriesList = notASortedArrayForPriceTable.reduce(
    (acc: IRow[], item: string[]) => {
      if (counterOfNonEmptyFields(item) === 1) {
        _categiryTitle = item[0];
        acc.push([_categiryTitle, []]);
      }

      if (!_categiryTitle) {
        newData.push(item);
        return acc;
      }
      if (counterOfNonEmptyFields(item) > 1) {
        const itemIndex = acc.findIndex(
          (item: IRow) => item[0] === _categiryTitle
        );
        acc[itemIndex][1].push(item);
      }

      return acc;
    },
    [] as IRow[]
  );

  const sortedArrayByCategory = categoriesList.sort((a: IRow, b: IRow) =>
    mySort(a, b)
  );
  for (const value of sortedArrayByCategory) {
    value[1].sort((a: string[], b: string[]) => mySort(a, b));
    newData.push(["", "", "", ""], [value[0], "", "", ""], ...value[1]);
  }
  return newData;
};

const counterOfNonEmptyFields = (array: string[]): number =>
  array.filter((item) => item).length;

const mySort = (a: IRow | string[], b: IRow | string[]): number => {
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};

export default csvSorting;
