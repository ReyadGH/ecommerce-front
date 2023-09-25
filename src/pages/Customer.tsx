// import { ChangeEvent, useEffect, useState } from "react";
// import SimpleTable from "../components/SimpleTable";
import { useFetchData } from "../hooks/fetchData";
import _ from "underscore";
// import { useSearchFor } from "../hooks/searchFor";
// import { Pagination } from "antd";
import AdvanceTable from "../components/AdvanceTable";

function Customer() {
  const url = "http://localhost:8080/customer/list";
  const [fetchedData]: any = useFetchData({
    serverUrl: url,
    params: {},
  });

  // const [search, setSearch] = useSearchFor({list:[],target:"", value:""});
  // const [pageble, setPageble] = useState({elements:[],page:0, size:20, totalPages:0})

  if (fetchedData.loading) {
    return (
      <>
        <p>please wait, data loading...</p>
      </>
    );
  }
  // const handleChangeSearch =(search?:string) => {
  //   setSearch({list:fetchedData.response, target:"username", value:search});
  // }

  // const handlePageChange = (page:number, size:number) =>{
  //   const getElements = ()=>{
  //   const elementList:Array<object> = []
  //   for (let i = page*size; i < ((page*size)+size); i++) {
  //     elementList.push(items[i]);
  //   }

  //     return elementList
  //   }
  //   console.log(getElements())
  //   setPageble({elements:getElements(), page,size, totalPages:0})
  // }

  // const items = (search.items==undefined || search.items.length==0 )? fetchedData.response: search.items

  return (
    <>
      <h1>Customers Table</h1>
      <AdvanceTable items={fetchedData.response}></AdvanceTable>
      {/* <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChangeSearch(event.target.value)
        }
      />
      <SimpleTable
        items={pageble.elements.length == 0 ? items : pageble.elements}
        actions={[]}
      />
      <Pagination
        className="m-auto text-center p-10"
        defaultCurrent={pageble.page + 1}
        total={items.length}
        defaultPageSize={pageble.size}
        showQuickJumper
        onChange={(page: number, size: number) => handlePageChange(page, size)}
      /> */}
    </>
  );
}

export default Customer;
