import { Pagination } from "antd";
import { useFilterSearch } from "../hooks/useFilterSearch";
import ProductFilter from "./ProductFilter";
import { filterSearchType } from "../types/searchFilterType";
import { LoadingData } from "./LoadingData";
import { SidebarOption } from "../types/SidebarOption";

function AdvanceViewer(props: {
  items: { [key: number | string]: string }[];
  options?: SidebarOption;
  children: any;
}) {
  const filterOptions = props.items ? [] : Object.keys(props.items[0]) || [];
  const [pageble, setPageble] = useFilterSearch({
    list: props.items,
    filterTarget: filterOptions[0],
    searchValue: "",
    sortOrder: "asc",
    result: [],
    page: 1,
    size: 20,
    totalPages: props.items.length,
  });

  if (!props.items || props.items.length === 0) {
    return <p className="text-center text-2xl">No Data</p>;
  }

  const changeHandler = (newPage: filterSearchType) => {
    setPageble({ ...pageble, ...newPage });
  };

  if (pageble.isLoading) {
    return (
      <>
        <LoadingData text={"please wait, data calculating..."} />
      </>
    );
  }

  const sortTypeData = {
    selectedId: 0,
    options: Object.keys(props.items[0]).map((item) => {
      return { value: item, text: item };
    }),
  };

  return (
    <>
      <div className=" p-5 text-center">
        <ProductFilter filter={sortTypeData} submit={changeHandler} />
      </div>

      <div className="grow py-4">
        {
          <props.children
            {...{ items: pageble.result, options: props.options }}
          />
        }
      </div>

      <div className=" dark:bg-gray-300">
        <Pagination
          className="m-auto p-10 text-center "
          current={pageble.page}
          total={pageble.totalPages}
          defaultPageSize={pageble.size}
          showQuickJumper
          onChange={(page, size) => changeHandler({ ...pageble, page, size })}

          // onChange={(page: number, size: number) => handlePageChange(page, size)}
        />
      </div>
    </>
  );
}

export default AdvanceViewer;
