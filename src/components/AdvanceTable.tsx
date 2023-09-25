import { Pagination } from "antd";
import SimpleTable from "./SimpleTable";
import { ChangeEvent, useState } from "react";
import { useSearchFor } from "../hooks/searchFor";

function AdvanceTable( props:{items:any[]}) {
  const [search, setSearch] = useSearchFor({ list: props.items, target: "", value: "" });
  const [pageble, setPageble] = useState({
    elements: props.items,
    page: 0,
    size: 20,
    totalPages: props.items.length/20,
  });
  
  
  const handleChangeSearch = (search?: string) => {
    setSearch({
      list: props.items,
      target: "username",
      value: search,
    });
  };

  const handlePageChange = (page: number, size: number) => {
    const getElements = () => {
      const elementList: Array<object> = [];
      for (let i = page * size; i < page * size + size; i++) {
        elementList.push(props.items[i]);
      }

      return elementList;
    };
    console.log(getElements());
    setPageble({ elements: getElements(), page, size, totalPages: 0 });
  };

  //console.log(items)
  return (
    <>
    <div>
    <input
    className="border-3 border border-black"
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChangeSearch(event.target.value)
        }
      />
      <span className="pl-2">{search.items || 0} results.</span>
    </div>

      <SimpleTable
        list={props.items}
        actions={[]}
      />
      <Pagination
        className="m-auto text-center p-10"
        defaultCurrent={pageble.page + 1}
        total={props.items.length}
        defaultPageSize={pageble.size}
        showQuickJumper
        onChange={(page: number, size: number) => handlePageChange(page, size)}
      />
    </>
  );
}

export default AdvanceTable;
