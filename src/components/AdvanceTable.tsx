import { Pagination } from "antd";
import SimpleTable from "./SimpleTable";
import { ChangeEvent } from "react";
import { useSearchForPageable } from "../hooks/useSearchForPageable";
import searchPageableHookType from "../types/searchPageableHookType";


function AdvanceTable( props:{items:{[key: number|string]: string}[]}) {
  const filterOptions = Object.keys(props.items[0])
  const [pageble, setPageble] = useSearchForPageable({
    list: props.items,
    target:filterOptions[0],
    value:"",
    result:[],
    page: 1,
    size: 20,
    totalPages: props.items.length,
  } );

  const changeHandler= (newPage: searchPageableHookType)=>{
  setPageble(newPage)
  }

  if(props.items.length<0){
    return(<p>No data</p>)
  }

  return (
    <>
    <div className=" text-center p-3">
    <input
    className="border-3 border border-black"
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          changeHandler({...pageble, value:event.target.value, page:1})
        }
      />
      <span className="ml-5" >Search for : </span>
      <select name="" id="" onChange={(e)=> {changeHandler({...pageble, target:e.target.value}); console.log(pageble.target)}}>
        {filterOptions.map((item)=> <option value={item}>{item}</option>)}
      </select>
    </div>
        {
          (pageble.result.length!=0)?
          (<SimpleTable
            items={pageble.result}
            actions={[]}
          />):(<p>No result</p>)
        }
      
      <Pagination
        className="m-auto text-center p-10"
        current={pageble.page}
        total={pageble.totalPages}
        defaultPageSize={pageble.size}
        showQuickJumper
          
          onChange={(page, size) => changeHandler({...pageble, page,size})}
        // onChange={(page: number, size: number) => handlePageChange(page, size)}
      />
    </>
  );
}

export default AdvanceTable;
