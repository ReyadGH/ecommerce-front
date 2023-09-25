import { Pagination } from "antd";
import SimpleTable from "./SimpleTable";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchFor } from "../hooks/searchFor";

function AdvanceTable(items: []) {
  const [search, setSearch] = useSearchFor({
    list: items,
    target: "",
    value: "",
  });
  const [pageble, setPageble] = useState({
    elements: items,
    page: 0,
    size: 20,
    totalPages: items.length / 20,
  });

  useEffect(() => {
    getElements(pageble.page,pageble.size)
    console.log("tomato")
}, []);

  const getElements = (page: number, size: number) => {
    const elementList: Array<object> = [];
    for (let i = page * size; i < page * size + size; i++) {
      elementList.push(items[i]);
    }

    setPageble({...pageble, elements:elementList});
  };

  const handleChangeSearch = (search?: string) => {
    setSearch({
      list: items,
      target: "username",
      value: search,
    });
  };

  const handlePageChange = (page: number, size: number) => {
    setPageble({ elements: getElements(), page, size, totalPages: 0 });
  };

  console.log(pageble.elements);
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

      <SimpleTable list={search} actions={[]} />
      <Pagination
        className="m-auto text-center p-10"
        defaultCurrent={pageble.page + 1}
        total={items.length}
        defaultPageSize={pageble.size}
        showQuickJumper
        onChange={(page: number, size: number) => handlePageChange(page, size)}
      />
    </>
  );
}

export default AdvanceTable;
