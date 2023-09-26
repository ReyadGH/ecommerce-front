import { Pagination } from "antd";
import SimpleTable from "./SimpleTable";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchFor } from "../hooks/useSearchFor";
function AdvanceTable( props:{items:{[key: number|string]: string}[]}) {
  const [search, setSearch] = useSearchFor({ list: props.items, target: "", value: "" ,result:[]});
  const [pageble, setPageble] = useState({
    items: {},
    page: 0,
    size: 20,
    totalPages: props.items.length/20,
  } );

  useEffect(
    ()=>{
      setSearch({ list: search.list, target: "username", value: "" ,result:[]})
      setPageble({
        items: search.list.slice(0,20),
        page: 0,
        size: 20,
        totalPages: search.list.length/20,
      } )
    },[]
  )
  
  const handleChangeSearch = (searchValue: string) => {
    setSearch({...search,target:"username", value:searchValue})
  };

  const getPageItems = (page: number, size: number) =>{
    return search.list.slice((page-1)*size,(page)*size)
  }
  const handlePageChange = (page: number, size: number) => {
    setPageble({...pageble,page,size,items:getPageItems(page, size)})
    console.log(getPageItems(page, size))
  };

  if(props.items.length<0){
    return(<></>)
  }
// console.log(search.result)
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
    </div>

      <SimpleTable
        items={ pageble.items }
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
