type pagebleType = {
  items: { [key: string | number]: string }[];
  page: number;
  size: number;
  totalPages: number;
};

export default pagebleType;
