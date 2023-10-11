"use client";
import ProductCard from "../../components/ProductCard";
import { useFetchData } from "../../hooks/useFetchData";
import ProductFilter from "../../components/ProductFilter";
import { Pagination } from "antd";
import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";

function Product() {
  const [fetchedData, setFetchedData] = useFetchData({
    serverUrl: "http://localhost:8081/product/page",
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
  const sortTypeData = {
    selectedId: 0,
    options: Object.keys(fetchedData.response.content[0]).map((item) => {
      return { value: item, text: item };
    }),
  };

  const handleChange = (params: object) => {
    setFetchedData({
      ...fetchedData.info,
      params: { ...fetchedData.info.params, ...params },
    });
  };

  return (
    <>
      <div className="pt-5">
        {/* sort tab */}
        <div className="m-auto text-center p-5">
          <ProductFilter filter={sortTypeData} submit={handleChange} />
        </div>

        <ProductCard items={fetchedData.response.content} />

        <Pagination
          className="m-auto text-center p-10"
          defaultCurrent={fetchedData.response.number + 1}
          total={fetchedData.response.totalElements - fetchedData.response.size}
          defaultPageSize={fetchedData.response.size}
          showQuickJumper
          onChange={(page: number, size: number) =>
            handleChange({ page, size })
          }
        />
      </div>
    </>
  );
}

export default Product;
