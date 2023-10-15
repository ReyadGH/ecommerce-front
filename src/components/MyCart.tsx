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
      <div className="col-span-3 space-y-5 rounded-md border-2 border-black border-opacity-10 p-5 shadow-lg">
        <h1 className="border-b-2 py-4 pl-4 text-3xl">{props.title}</h1>

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
