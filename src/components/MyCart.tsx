import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCartReducer from "../hooks/useCartReducer";
import { CartItemsStatus, CartItemsType } from "../types/CartItemsType";
import { actionType } from "../types/NumeriaclInputType";
import { ButtonCallback } from "./ButtonCallback";
import CartItemCard from "./CartItemCard";
import React, { useContext } from "react";
import { getSession } from "next-auth/react";
import axios from "axios";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { SideBarContext } from "../pages/_app";

export const CartContext = React.createContext((action: actionType) => {});

const mutateFn = (cart: CartItemsType[], session: Session | null) => {
  return axios
    .put("http://localhost:8081/cart/checkout", null, {
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
  const { push } = useRouter();
  const sidebarContext = useContext(SideBarContext);
  const client = useQueryClient();
  const { mutate, isError, error } = useMutation({
    mutationFn: () => getSession().then((session) => mutateFn(cart, session)),
    onSuccess: async () => {
      await client
        .fetchQuery({ queryKey: ["cart-page"] })
        .then((response) => client.setQueryData(["cart-page"], response));
    },
  });

  const checkoutHandler = () => {
    mutate();
    sidebarContext.status.set(false);
    push("/checkout");
  };

  return (
    <>
      <div className="col-span-3 space-y-5">
        <h1 className="border-b-2 py-4 pl-4 text-3xl">{props.title}</h1>
        <CartContext.Provider value={reducer}>
          {cart.length !== 0 ? (
            cart
              .filter((c) => c.status == CartItemsStatus.DRAFT)
              .map((item) => {
                return (
                  <CartItemCard
                    item={item}
                    showOptions={props.showOptions}
                    key={"CartCard-" + item.id}
                  />
                );
              })
          ) : (
            <p className="p-8 text-center"> Your cart is empty</p>
          )}
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
                disabled={cart.length === 0}
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
