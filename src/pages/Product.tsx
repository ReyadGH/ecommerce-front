import ProductCard from "../components/ProductCard";
import { useFetchData } from "../hooks/fetchData";
import ProductFilter from "../components/ProductFilter";
import { Pagination } from "antd";

function Product() {
  const [fetchedData, setfetchedData]: any = useFetchData({
    serverUrl: "http://localhost:8080/product/page",
    params: {},
  });

  if (fetchedData.loading) {
    return (
      <>
        <p>please wait, data loading...</p>
      </>
    );
  }

  const sortTypeData = {
    selectedId: 0,
    options: Object.keys(fetchedData.response.content[0]).map((item) => {
      return { value: item, text: item };
    }),
  };

  const handleChange = (sort: string) => {
    setfetchedData({
      serverUrl: "http://localhost:8080/product/page",
      params: { sort: sort },
    });
  };

  const handlePageClick = (currentPage:number, pageSize:number) => {
    console.log({ page: currentPage, size: pageSize });
    setfetchedData({
      serverUrl: "http://localhost:8080/product/page",
      params: { page: currentPage, size: pageSize },
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
          onChange={handlePageClick}
        />
      </div>
    </>
  );
}

export default Product;
