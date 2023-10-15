import { useEffect, useState } from "react";
import _ from "underscore";

export type useFilterSearchType = {
  list: { [key: number | string]: string }[];
  filterTarget: string;
  searchValue: string;
  sortOrder: "asc" | "desc";
  result: { [key: number | string]: string }[];
  page: number;
  size: number;
  totalPages: number;
};

export function useFilterSearch(
  initialState: useFilterSearchType,
): [useFilterSearchType, (search: useFilterSearchType) => void] {
  const [filteredSearchedItems, setFilterSearch] = useState(initialState);

  useEffect(() => {
    console.log("initial");
    pipeline(initialState);
  }, []);

  const pipeline = (newSearch: useFilterSearchType) => {
    const searchItems = (items: useFilterSearchType) => {
      return items.list.filter((item) => {
        return items.searchValue !== ""
          ? String(item[items.filterTarget]).includes(items.searchValue)
          : item;
      });
    };

    const sortItems = (items: useFilterSearchType) => {
      const sorted = _.sortBy(items.result, items.filterTarget);
      return items.sortOrder === "asc" ? sorted : sorted.reverse();
    };

    const pagingItems = (items: useFilterSearchType) => {
      items.page = items.page;
      items.totalPages = items.result.length;
      items.result = items.result.slice(
        (items.page - 1) * items.size,
        items.page * items.size,
      );
      return items;
    };
    newSearch.result = searchItems(newSearch);
    newSearch.result = sortItems(newSearch);
    newSearch = pagingItems(newSearch);
    console.log(newSearch);
    setFilterSearch(newSearch);
  };

  return [filteredSearchedItems, pipeline];
}
