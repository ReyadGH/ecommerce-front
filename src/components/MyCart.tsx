import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCartReducer from "../hooks/useCartReducer";
import { CartItemsType } from "../types/CartItemsType";
import { actionType } from "../types/NumeriaclInputType";
import { ButtonCallback } from "./ButtonCallback";
import CartItemCard from "./CartItemCard";
import React from "react";
import { getSession } from "next-auth/react";
import axios from "axios";
import { Session } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

export const CartContext = React.createContext((action: actionType) => {});

const mutateFn = (cart: CartItemsType[], session: Session | null) => {
  return axios
    .put("http://localhost:8081/cart/checkout", {
      headers: {
        Authorization: `Bearer ${
          session != null && session.accessToken ? session.accessToken : ""
        }`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};

export function MyCart(props: {
  carts: CartItemsType[];
  title: string;
  showOptions: boolean;
}) {
  const { data: cart, reducer: reducer } = useCartReducer(props.carts);

  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => getSession().then((session) => mutateFn(cart, session)),
    onSuccess: () => {
      // client.setQueryData(["cart-page"], newCarts);
      client.refetchQueries();
    },
  });

  const checkoutHandler = () => {
    mutate();
  };

  return (
    <>
      <div className="col-span-3 space-y-5">
        <h1 className="border-b-2 py-4 pl-4 text-3xl">{props.title}</h1>
        <CartContext.Provider value={reducer}>
          {cart.map((item) => {
            return (
              <CartItemCard
                item={item}
                showOptions={props.showOptions}
                key={"CartCard-" + item.id}
              />
            );
          })}
        </CartContext.Provider>
        <div className=" space-y-4 border-t-2 py-4 pl-4 pt-4">
          <div className="flex items-center justify-between px-3">
            <h1 className=" text-2xl">Total : </h1>
            <h1 className=" text-2xl">
              {"$" +
                cart.reduce((p, c) => p + c.price * c.quantity, 0).toFixed(2)}
            </h1>

            {props.showOptions && (
              <ButtonCallback
                callback={() => checkoutHandler()}
                item={props.carts}
                text="Checkout"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
