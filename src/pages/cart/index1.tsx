import { useReducer } from "react";
import { actionType } from "../../types/NumeriaclInputType";
import axios from "axios";
import { useSession } from "next-auth/react";
import { CartItemsType } from "../../types/CartItemsType";
import { MyCart } from "../../components/MyCart";
import { BillingCard } from "../../components/BillingCard";
import _, { keys } from "underscore";

const cartReducer = (cart: CartItemsType[], action: actionType) => {
  const currentIndex = cart.findIndex((item) => item.id == action.id);

  const updatedCart = { ...cart[currentIndex] };

  if (currentIndex < 0) throw Error("Internal error");
  switch (action.type) {
    case "increment":
      if (updatedCart.quantity + action.value < action.max)
        updatedCart.quantity += action.value;

      break;
    case "decrement":
      if (updatedCart.quantity - action.value > action.min)
        updatedCart.quantity -= action.value;
      break;

    case "change":
      if (
        updatedCart.quantity + action.value < action.max &&
        updatedCart.quantity + action.value > action.min
      )
        updatedCart.quantity = action.value;
      break;
    default:
      throw Error("Wrong action type: " + action.type);
  }
  const outData: CartItemsType[] = [...cart];
  outData[currentIndex] = updatedCart;

  return outData;
};

function CartPage(props: { items: CartItemsType[] }) {
  const [carts, reducer] = useReducer(cartReducer, props.items);
  const { data: session, status } = useSession();

  const childHandler = (action: actionType) => {
    reducer(action);
    axios
      .put(
        "http://localhost:8081/cart",
        {
          ...carts[carts.findIndex((item) => item.id == action.id)],
        },
        {
          headers: {
            Authorization: `Bearer ${
              session != null && session.accessToken ? session.accessToken : ""
            }`,
          },
        }
      )
      .catch();
  };
  const group = _.groupBy(
    carts.filter((cart) => cart.status != "DRAFT"),
    "date"
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-2 w-[90%] m-auto ">
        {/* items grid */}
        <MyCart
          carts={carts.filter((cart) => cart.status == "DRAFT")}
          childHandler={childHandler}
          title="MyCart"
          showOptions={true}
        />
        {Object.keys(group).map((k) => (
          <MyCart
            carts={group[k]}
            childHandler={childHandler}
            title={"Old"}
            showOptions={false}
          />
        ))}

        {/* total grid */}
        <BillingCard carts={carts} />
      </div>
    </>
  );
}

export default CartPage;
