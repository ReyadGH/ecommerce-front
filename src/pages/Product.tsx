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

  const handleChange = (params:object) => {
    setfetchedData({
      ...fetchedData.info,
      params: {...fetchedData.info.params, ...params },
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
          onChange={(page:number, size:number) =>handleChange({page, size})}
        />
      </div>
    </>
  );
}

export default Product;
