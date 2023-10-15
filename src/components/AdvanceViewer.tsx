import { Pagination } from "antd";
import { useFilterSearch } from "../hooks/useFilterSearch";
import ProductFilter from "./ProductFilter";
import { filterSearchType } from "../types/searchFilterType";

function AdvanceViewer(props: {
  items: { [key: number | string]: string }[];
  children: any;
}) {
  const filterOptions = Object.keys(props.items[0]) || [];
  const [pageble, setPageble] = useFilterSearch({
    list: props.items,
    filterTarget: filterOptions[0],
    searchValue: "",
    sortOrder: "asc",
    result: props.items,
    page: 1,
    size: 20,
    totalPages: props.items.length,
  });

  const changeHandler = (newPage: filterSearchType) => {
    setPageble({ ...pageble, ...newPage });
  };

  if (props.items.length < 0) {
    return <p>No data</p>;
  }

  const sortTypeData = {
    selectedId: 0,
    options: Object.keys(props.items[0]).map((item) => {
      return { value: item, text: item };
    }),
  };

  return (
    <>
      <div className="m-auto p-5 text-center">
        <ProductFilter filter={sortTypeData} submit={changeHandler} />
      </div>

      {<props.children {...{ items: pageble.result }} />}

      <Pagination
        className="m-auto p-10 text-center"
        current={pageble.page}
        total={pageble.totalPages}
        defaultPageSize={pageble.size}
        showQuickJumper
        onChange={(page, size) => changeHandler({ ...pageble, page, size })}
        // onChange={(page: number, size: number) => handlePageChange(page, size)}
      />
    </>
  );
}

export default AdvanceViewer;
