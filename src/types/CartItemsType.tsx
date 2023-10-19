export type CartItemsType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  date: Date;
  status: CartItemsStatus;
};

export enum CartItemsStatus {
  DRAFT = "DRAFT",
  CHECKED_OUT = "CHECKED_OUT",
  CANCELED = "CANCELED",
}
