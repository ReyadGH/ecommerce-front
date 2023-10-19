import { Session } from "next-auth";

export type NumericalInputType = {
  id: number;
  defualtValue: number;
  step?: number;
  min?: number;
  max?: number;
  deleteBtn?: boolean;
  changeHandler: (action: actionType) => void;
};

export type actionType = {
  id: number;
  value: number;
  type: actionTypeEnum;
  min: number;
  max: number;
  session?: Session | null;
};

export enum actionTypeEnum {
  INCREASE,
  DECREASE,
  CANCELE,
  UPDATE,
  NONE,
}
