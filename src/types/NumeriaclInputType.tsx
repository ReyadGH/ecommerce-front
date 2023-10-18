import { Session } from "next-auth";

export type NumericalInputType = {
  id: number;
  defualtValue: number;
  step?: number;
  min?: number;
  max?: number;
  changeHandler: (action: actionType) => void;
};

export type actionType = {
  id: number;
  value: number;
  type: string;
  min: number;
  max: number;
  session?: Session | null;
};
