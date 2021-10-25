import { IDataForPricingTable, IRow } from "../types";

const csvSorting = (notASortedArrayForPriceTable: IRow[]): IRow[] => {
  let _categoryTitle: string;
  const sortedTable: IDataForPricingTable = [];
  const categories = new Map();

  notASortedArrayForPriceTable.forEach((row) => {
    if (counterOfNonEmptyFields(row) === 1) {
      //This is a string called category
      _categoryTitle = row[0]; // Save the name of the category
      categories.set(_categoryTitle, []); // Add to category item with key _categoryTitle
    } else if (!_categoryTitle) {
      // This is the element of the header that you do not need to sort
      sortedTable.push(row);
    } else {
      // This is the inside of element that relate to a certain category
      categories.get(_categoryTitle).push(row); // Adding an element with a key name of the subtype category related to it
    }
  });

  const assortedTable = [...categories].sort(); // Sorting table by category names

  assortedTable.forEach((category) => {
    const { 0: titleCategory, 1: listOfInternalCategories } = category;
    const _categoryTitleRow = [titleCategory, "", "", ""];
    const _sortedListOfInternalCategories = listOfInternalCategories.sort(); //Sort internal elements of a specific category

    sortedTable.push(_categoryTitleRow, ..._sortedListOfInternalCategories);
  });
  return sortedTable;
};

const counterOfNonEmptyFields = (array: IRow): number =>
  array.filter((i) => i).length;

export default csvSorting;
