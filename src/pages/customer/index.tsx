"use client";
import AdvanceTable from "../../components/AdvanceTable";
import { useFetchData } from "../../hooks/useFetchData";

function Customer() {
  const url = "http://localhost:8081/customer";
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
    </>
  );
}

export default Customer;
