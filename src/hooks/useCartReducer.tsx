import { useState } from "react";
import { CartItemsStatus, CartItemsType } from "../types/CartItemsType";
import { actionType, actionTypeEnum } from "../types/NumeriaclInputType";

function useCartReducer(initial: CartItemsType[]) {
  const [cart, setCarts] = useState(initial);

  const cartReducer = (action: actionType) => {
    const currentIndex = cart.findIndex((item) => item.id == action.id);

    const updatedCart = { ...cart[currentIndex] };

    if (currentIndex < 0) throw Error("Internal error");
    switch (action.type) {
      case actionTypeEnum.INCREASE:
        if (updatedCart.quantity + action.value <= action.max)
          updatedCart.quantity += action.value;

        break;
      case actionTypeEnum.DECREASE:
        if (updatedCart.quantity - action.value >= action.min)
          updatedCart.quantity -= action.value;
        break;

      case actionTypeEnum.UPDATE:
        if (
          updatedCart.quantity + action.value < action.max &&
          updatedCart.quantity - action.value > action.min &&
          action.value != 0
        )
          updatedCart.quantity = action.value;
        break;
      case actionTypeEnum.CANCELE:
        updatedCart.status = CartItemsStatus.CANCELED;
        action.status = CartItemsStatus.CANCELED;
        break;
      default:
        throw Error("Wrong action type: " + action.type);
    }
    console.log(updatedCart);
    const outData: CartItemsType[] = [...cart];
    outData[currentIndex] = updatedCart;
    setCarts(outData);
  };

  return { data: cart, reducer: cartReducer };
}

export default useCartReducer;
