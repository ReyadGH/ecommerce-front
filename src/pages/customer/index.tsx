"use client";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import AdvanceViewer from "../../components/AdvanceViewer";
import SimpleTable from "../../components/SimpleTable";
function Customer() {
  const url = "http://localhost:8081/customer";
  const { data, isLoading, error } = useQueryFetch({
    url: url,
    key: "customer-list",
  });
  console.log(isLoading);
  if (isLoading) {
    return <LoadingData text={"please wait, data loading..."} />;
  }
  console.log(isLoading);
  if (error) {
    return (
      <div className="text-center">
        <h3>{"error.code"}</h3>
        <h3>{"error.message"}</h3>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center text-xl">Customers Table</h1>
      <AdvanceViewer items={data} children={SimpleTable} />
    </>
  );
}

export default Customer;
