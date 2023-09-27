"use client";
import { useFetchData } from "../../hooks/useFetchData";
import _ from "underscore";
import AdvanceTable from "../../components/AdvanceTable";
import { Footer } from "../../components/Footer";

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
      <body>
        <h1 className="text-center text-xl">Customers Table</h1>
        <AdvanceTable items={fetchedData.response}></AdvanceTable>
      </body>
      <Footer />
    </>
  );
}

export default Customer;
