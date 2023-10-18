"use client";
import ProductCard from "../../components/ProductCard";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import AdvanceViewer from "../../components/AdvanceViewer";

function Product() {
  const { data, isError, isLoading, error } = useQueryFetch({
    url: "http://localhost:8081/product",
    key: "product-list",
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

  if (data.length < 0) {
    return <p>empty</p>;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col pt-4">
        <h1 className="px-10 text-3xl">Customers Table</h1>
        <AdvanceViewer children={ProductCard} items={data} />
      </div>
    </>
  );
}

export default Product;
