import { useContext } from "react";
import { CartItemsType } from "../types/CartItemsType";
import NumericalInput from "./NumericalInput";
import { CartContext } from "./MyCart";
import axios from "axios";
import { Session } from "next-auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { actionType } from "../types/NumeriaclInputType";
// import CardButton from "./CardButton";

const mutateFn = (cart: CartItemsType, session: Session | null) => {
  console.log(cart);
  return axios
    .put(
      "http://localhost:8081/cart",
      {
        id: cart.id,
        quantity: cart.quantity,
        status: cart.status,
      },
      {
        headers: {
          Authorization: `Bearer ${
            session != null && session.accessToken ? session.accessToken : ""
          }`,
        },
      },
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err);
};

const CartItemCard = (props: { item: CartItemsType; showOptions: boolean }) => {
  const localContext = useContext(CartContext);

  const client = useQueryClient();
  const { mutate, error, isError } = useMutation({
    mutationFn: () =>
      getSession().then((session) => mutateFn(props.item, session)),
    onSuccess: async () => {
      //client.setQueryData(["cart-page", props.item.id], newCarts);
      await client
        .fetchQuery({ queryKey: ["cart-page"] })
        .then((d) => client.setQueriesData({ queryKey: ["cart-page"] }, d));
    },
  });

  const handelAll = (action: actionType) => {
    mutate();
    localContext(action);
    if (isError) throw new Error(error.name + ": " + error.message);
  };

  return (
    <div
      key={props.item.id + "-grid-item"}
      className="flex justify-around space-x-5"
    >
      <img
        className="h-20 w-20 md:h-40 md:w-40"
        src={props.item.image}
        alt="Product image"
      />
      <div className="w-[45%] pt-2">
        <p className="text-lg font-bold lg:text-xl">{props.item.name}</p>
        <p className="line-clamp-2 hidden h-20 max-h-fit max-w-fit text-lg text-gray-600 md:inline-block">
          {props.item.description}
        </p>
      </div>
      <div>
        <p className="text-center">
          ${(props.item.price * props.item.quantity).toFixed(2)}
        </p>
        <span className="my-auto h-min">
          {props.showOptions && (
            <NumericalInput
              id={props.item.id}
              defualtValue={props.item.quantity}
              changeHandler={handelAll}
              min={1}
              max={99}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default CartItemCard;
