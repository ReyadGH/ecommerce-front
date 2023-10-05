import { useEffect, useReducer, useState } from "react";
import NumericalInput from "../../components/NumericalInput";
import { actionType } from "../../types/NumeriaclInputType";
import axios from "axios";
import { useSession } from "next-auth/react";
type CartItemsType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

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
    axios.post(
      "http://localhost:8081/cart/",
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
    ).catch(
      console.log();
    );
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 w-[90%] m-auto ">
        {/* items grid */}
        <div className="col-span-3 border-black border-opacity-10 border-2 shadow-lg rounded-md p-5 space-y-5">
          <h1 className="text-3xl pl-4 py-4 border-b-2">My Cart</h1>

          {carts.map((item) => {
            return (
              <div
                key={item.id + "-grid-item"}
                className="flex space-x-5 justify-around"
              >
                <img
                  className="w-40 h-40"
                  src={item.image}
                  alt="Product image"
                />
                <span>
                  <p className="font-bold text-xl">Lorem, ipsum dolor.</p>
                  <p className="text-lg text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae optio possimus mollitia?
                  </p>
                </span>
                <span className="h-min my-auto">
                  <NumericalInput
                    id={item.id}
                    defualtValue={item.quantity}
                    changeHandler={childHandler}
                    min={1}
                    max={99}
                  />
                </span>
              </div>
            );
          })}
        </div>
        {/* total grid */}
        <div className="border-black border-opacity-10 border-2 shadow-lg divide-y-2 p-5 rounded-md text-xl h-fit">
          {/* Items List */}
          <div className="px-3 space-y-4 pb-6">
            {carts.map((item) => {
              return (
                <div
                  key={item.id + "-total-item"}
                  className="flex justify-between"
                >
                  <p>{item.name}</p>
                  <p>
                    <span>$</span>
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Items total */}
          <div className=" space-y-4 pt-4">
            <div className="flex px-3 justify-between">
              <p>Your total is.</p>
              <p>
                <span>$</span>
                <>
                  {carts
                    .reduce((p, c) => p + c.price * c.quantity, 0)
                    .toFixed(2)}
                </>
              </p>
            </div>
            <button className="bg-blue-500 rounded-md p-2 text-slate-50 w-full hover:bg-blue-600">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
