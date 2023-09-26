import { useEffect, useState } from "react";
import searchPageableHookType from "../types/searchPageableHookType";

// search.list.slice((page-1)*size,(page)*size)
export function useSearchForPageable(
  initialState: searchPageableHookType
): [searchPageableHookType, (search: searchPageableHookType) => void] {
  const [search, setSearch] = useState(initialState);

  useEffect(()=>{
    searchFor(initialState)
  },[])
  const searchFor = (newSearch: searchPageableHookType) => {
    const filterData = newSearch.list.filter((item) => String(item[newSearch.target.toLocaleLowerCase()]).includes(newSearch.value.toLocaleLowerCase()))
    
    setSearch({...newSearch,
      page:newSearch.page,
      totalPages:filterData.length,
      result:filterData.slice((newSearch.page-1)*newSearch.size, (newSearch.page)*newSearch.size)})
  };

  return [search, searchFor];
}
