import { DropDownType } from "./dropDownType";

export type searchFilterType = {
  filter: DropDownType;
  submit: (filtters: filterSearchType) => void;
};

export type filterSearchType = {
  filterTarget?: string;
  searchValue?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  size?: number;
};
