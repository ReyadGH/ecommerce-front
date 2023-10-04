export type NumericalInputType = {
  id: number;
  defualtValue: number;
  min?: number;
  max?: number;
  changeContext: (cart: { id: number; quantity: number }) => void;
};

export type actionType = {
  id: number;
  value: number;
  type: string;
  min: number;
  max: number;
};
