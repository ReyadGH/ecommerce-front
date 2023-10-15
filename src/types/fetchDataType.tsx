type fetchDataType = {
  info: object | null;
  error: { message: string; code: string };
  response: { [key: string]: string; [key: number]: string }[];
  loading: boolean;
};

export default fetchDataType;
