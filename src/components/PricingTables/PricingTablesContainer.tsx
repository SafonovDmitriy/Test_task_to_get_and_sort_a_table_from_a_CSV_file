import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForPricingTables } from "../../redux/actions/pricingTablesActions";
import { dataForPricingTablesSelector } from "../../redux/selectors";
import PricingTables from "./PricingTables";

const PricingTablesContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataForPricingTables());
  }, [dispatch]);

  const dataForPricingTables: Array<string[]> = useSelector(
    dataForPricingTablesSelector
  );

  return dataForPricingTables.length ? (
    <PricingTables dataForPricingTables={dataForPricingTables} />
  ) : null;
};
export default PricingTablesContainer;
