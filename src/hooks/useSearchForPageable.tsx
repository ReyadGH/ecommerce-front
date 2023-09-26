import { useState } from "react";

type searchPageableHookType = {
  list: { [key: number | string]: string }[];
  target: string;
  value: string;
  result: object[];
  page: 0;
  size: 20;
  totalPages: number;
};
// search.list.slice((page-1)*size,(page)*size)
export function useSearchForPageable(
  initialState: searchPageableHookType
): [searchPageableHookType, (search: searchPageableHookType) => void] {
  const [search, setSearch] = useState(initialState);
  const searchFor = (newSearch: searchPageableHookType) => {
    setSearch({...newSearch,
      result: 
      newSearch.list.filter((item) => {
        return item[newSearch.target].includes(newSearch.value);
      })
      .slice((newSearch.page-1)*newSearch.size,(newSearch.page)*newSearch.size)});
  };

  return [search, searchFor];
}
