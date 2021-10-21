import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForPricingTable } from "../../redux/actions/pricingTablesActions";

import { dataForPricingTableSelector } from "../../redux/selectors";
import PricingTable from "./PricingTable";

const PricingTableContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataForPricingTable());
  }, [dispatch]);

  const dataForPricingTable: Array<string[]> = useSelector(
    dataForPricingTableSelector
  );

  return dataForPricingTable.length ? (
    <PricingTable dataForPricingTable={dataForPricingTable} />
  ) : null;
};
export default PricingTableContainer;
