import { useState } from "react";
import { CartItemsType } from "../types/CartItemsType";
import { actionType } from "../types/NumeriaclInputType";

function useCartReducer(initial: CartItemsType[]) {
  const [cart, setCarts] = useState(initial);

  const cartReducer = (action: actionType) => {
    const currentIndex = cart.findIndex((item) => item.id == action.id);

    const updatedCart = { ...cart[currentIndex] };

    if (currentIndex < 0) throw Error("Internal error");
    switch (action.type) {
      case "increment":
        if (updatedCart.quantity + action.value <= action.max)
          updatedCart.quantity += action.value;

        break;
      case "decrement":
        if (updatedCart.quantity - action.value >= action.min)
          updatedCart.quantity -= action.value;
        break;

      case "change":
        if (
          updatedCart.quantity + action.value < action.max &&
          updatedCart.quantity - action.value > action.min &&
          action.value != 0
        )
          updatedCart.quantity = action.value;
        break;
      default:
        throw Error("Wrong action type: " + action.type);
    }
    const outData: CartItemsType[] = [...cart];
    outData[currentIndex] = updatedCart;
    setCarts(outData);
  };

  return { data: cart, reducer: cartReducer };
}

export default useCartReducer;
