type searchPageableHookType = {
  list: { [key: number | string]: string }[];
  target: string;
  value: string;
  result: { [key: number | string]: string }[];
  page: number;
  size: number;
  totalPages: number;
};

export default searchPageableHookType;
