"use client";
import AdvanceTable from "../../components/AdvanceTable";
import { useFetchData } from "../../hooks/useFetchData";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
function Customer() {
  const url = "http://localhost:8081/customer";
  const [fetchedData] = useFetchData({
    serverUrl: url,
    params: {},
  });

  if (fetchedData.loading) {
    return <LoadingData text={"please wait, data loading..."} />;
  }

  if (fetchedData.error) {
    return (
      <div className="text-center">
        <h3>{fetchedData.error.code}</h3>
        <h3>{fetchedData.error.message}</h3>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  console.log(fetchedData.error);

  return (
    <>
      <h1 className="text-center text-xl">Customers Table</h1>
      <AdvanceTable items={fetchedData.response}></AdvanceTable>
    </>
  );
}

export default Customer;
