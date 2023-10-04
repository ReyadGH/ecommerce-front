import { useReducer } from "react";
import NumericalInput from "../../components/NumericalInput";
import { actionType } from "../../types/NumeriaclInputType";
import { CartItemsType } from "../../types/CartItemsType";

const reducer = (
  carts: CartItemsType[],
  action: actionType
): CartItemsType[] => {
  const cartIndex = carts.findIndex((cart) => cart.id === action.id);
  if (cartIndex < 0) throw Error("Internal Error: Out of cart index");

  const updatedCart = { ...carts[cartIndex] };

  switch (action.type) {
    case "increment":
      if (updatedCart.quantity < action.max) {
        updatedCart.quantity += action.value;
      }
      break;
    case "change":
      if (action.value >= action.min && action.value <= action.max) {
        updatedCart.quantity = action.value;
      }
      break;
    case "decrement":
      if (updatedCart.quantity > action.min) {
        updatedCart.quantity -= action.value;
      }
      break;
    default:
      throw Error("Internal Error: No reducer with type: " + action.type);
  }
  const updatedCarts = [...carts];
  updatedCarts[cartIndex] = updatedCart;

  return updatedCarts;
};
const props: { items: CartItemsType[] } = {
  items: [
    {
      id: 1,
      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 1,
    },
    {
      id: 22,
      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 3,
    },
    {
      id: 87,

      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 2,
    },
    {
      id: 63,
      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 3,
    },
  ],
};

function Cart() {
  const sumTotal = () => {
    return data
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const [data, reduceData] = useReducer(reducer, props.items);

  return (
    <div className="grid grid-cols-4 gap-2 w-[90%] m-auto ">
      {/* items grid */}
      <div className="col-span-3 border-black border-opacity-10 border-2 shadow-lg rounded-md p-5 space-y-5">
        {data.map((item) => {
          return (
            <div
              key={"cartItemsHolder-" + item.id}
              className="flex space-x-5 justify-around"
            >
              <img
                className="w-40 h-40"
                src={item.image}
                alt="Product image"
              />
              <span>
                <p className="font-bold text-xl">Lorem, ipsum dolor.</p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae optio possimus mollitia?
                </p>
              </span>
              <span className="h-min my-auto">
                <NumericalInput
                  id={item.id}
                  defualtValue={item.quantity}
                  min={1}
                  max={99}
                  changeHandler={reduceData}
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
          {data.map((item) => {
            return (
              <div
                key={"cartTotalHolder-" + item.id}
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
              <>{sumTotal()}</>
            </p>
          </div>
          <button className="bg-blue-500 rounded-md p-2 text-slate-50 w-full hover:bg-blue-600">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
