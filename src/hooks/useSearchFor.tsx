import { useState } from "react";

type searchHookType = {
  list: {[key: number|string]: string}[],
  target: string,
  value: string;
  result: object[];
};

export function useSearchFor(
  initialState: searchHookType
): [searchHookType, (search: searchHookType) => void] {
  const [search, setSearch] = useState(initialState);
  const searchFor = (newSearch: searchHookType) => {
    setSearch({
      ...newSearch,
      result: newSearch.list.filter((item) => {
        return item[newSearch.target].includes(newSearch.value);
      }),
    });
console.log(search)
};

  return [search, searchFor];
}