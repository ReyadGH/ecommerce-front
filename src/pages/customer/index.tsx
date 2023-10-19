"use client";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import AdvanceViewer from "../../components/AdvanceViewer";
import SimpleTable from "../../components/SimpleTable";
function Customer() {
  const url = "http://localhost:8081/customer";
  const { data, isLoading, isError, error } = useQueryFetch({
    url: url,
    key: ["customer-list"],
  });
  if (isLoading) {
    return (
      <>
        <LoadingData text={"please wait, data loading..."} />
      </>
    );
  }
  if (isError) {
    return (
      <div className="text-center">
        <h3>{error.name}</h3>
        <h3>{error.message}</h3>
        <button onClick={() => signIn("keycloak")}>Sign in</button>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen flex-col pt-4">
        <h1 className="px-10 text-3xl">Customers Table</h1>
        <AdvanceViewer items={data} children={SimpleTable} />
      </div>
    </>
  );
}

export default Customer;
