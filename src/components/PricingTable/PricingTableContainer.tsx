import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForPricingTable } from "../../redux/actions/pricingTablesActions";
import { dataForPricingTableSelector } from "../../redux/selectors";
import PricingTable from "./PricingTable";
//@ts-ignore //False refund in the case of an empty array contradicts the standard FC behavior
const PricingTableContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataForPricingTable());
  }, [dispatch]);

  const dataForPricingTable: Array<string[]> = useSelector(
    dataForPricingTableSelector
  );

  return (
    !!dataForPricingTable.length && (
      <PricingTable dataForPricingTable={dataForPricingTable} />
    )
  );
};
export default PricingTableContainer;
