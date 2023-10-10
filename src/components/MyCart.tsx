import { CartItemsType } from "../types/CartItemsType";
import { actionType } from "../types/NumeriaclInputType";
import CartItemCard from "./CartItemCard";

export function MyCart(props: {
  carts: CartItemsType[];
  childHandler: (action: actionType) => void;
  title: string;
  showOptions: boolean;
}) {
  return (
    <>
      <div className="col-span-3 border-black border-opacity-10 border-2 shadow-lg rounded-md p-5 space-y-5">
        <h1 className="text-3xl pl-4 py-4 border-b-2">{props.title}</h1>

        {props.carts.map((item) => {
          return (
            <CartItemCard
              item={item}
              childHandler={props.childHandler}
              showOptions={props.showOptions}
              key={"CartCard-" + item.id}
            />
          );
        })}
      </div>
    </>
  );
}
