"use client";
import ProductCard from "../../components/ProductCard";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import AdvanceViewer from "../../components/AdvanceViewer";

function Product() {
  const { data, isError, isLoading } = useQueryFetch({
    url: "http://localhost:8081/product",
    key: "product-list",
  });

  if (isLoading) {
    return <LoadingData text={"please wait, data loading..."} />;
  }

  if (isError) {
    return (
      <div className="text-center">
        <h3>{"fetchedData.error.code"}</h3>
        <h3>{"fetchedData.error.message"}</h3>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
  console.log(data);
  if (data.length < 0) {
    return <p>empty</p>;
  }

  return (
    <>
      <div className="pt-5">
        <AdvanceViewer children={ProductCard} items={data} />
      </div>
    </>
  );
}

export default Product;
