// import { ChangeEvent, useEffect, useState } from "react";
// import SimpleTable from "../components/SimpleTable";
import { useFetchData } from "../hooks/useFetchData";
import _ from "underscore";
// import { useSearchFor } from "../hooks/searchFor";
// import { Pagination } from "antd";
import AdvanceTable from "../components/AdvanceTable";

function Customer() {
  const url = "http://localhost:8080/customer/list";
  const [fetchedData] = useFetchData({
    serverUrl: url,
    params: {},
  });

  if (fetchedData.loading) {
    return (
      <>
        <p>please wait, data loading...</p>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center text-xl">Customers Table</h1>
      <AdvanceTable items={fetchedData.response}></AdvanceTable>
    </>
  );
}

export default Customer;
