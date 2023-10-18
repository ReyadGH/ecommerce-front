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
  isLoading?: boolean;
};

export function useFilterSearch(
  initialState: useFilterSearchType,
): [useFilterSearchType, (search: useFilterSearchType) => void] {
  const [filteredSearchedItems, setFilterSearch] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    pipeline(initialState);
    setIsLoading(false);
  }, []);

  const pipeline = (newSearch: useFilterSearchType) => {
    const searchItems = (items: useFilterSearchType) => {
      return items.list.filter((item) => {
        return String(item[items.filterTarget]).includes(items.searchValue);
      });
    };

    const sortItems = (items: useFilterSearchType) => {
      const sorted = _.sortBy(items.result, items.filterTarget);
      return items.sortOrder === "asc" ? sorted : sorted.reverse();
    };

    const pagingItems = (items: useFilterSearchType) => {
      items.page = filteredSearchedItems.page !== items.page ? items.page : 1;
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
    setFilterSearch({ ...newSearch, isLoading: isLoading });
  };

  return [filteredSearchedItems, pipeline];
}
