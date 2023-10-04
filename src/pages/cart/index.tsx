import { useReducer } from "react";
import NumericalInput from "../../components/NumericalInput";
import { actionType } from "../../types/NumeriaclInputType";

type CartItemsType = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

function inputReducer(data: CartItemsType, action: actionType) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        ...data,
        quantity:
          data.quantity + action.value > action.max
            ? data.quantity
            : data.quantity + action.value,
      };
    case "change":
      return {
        ...data,
        quantity:
          action.value > action.min && action.value < action.max
            ? data.quantity
            : data.quantity + action.value,
      };
    case "decrement":
      return {
        ...data,
        quantity:
          data.quantity - action.value < action.min
            ? data.quantity
            : data.quantity - action.value,
      };
    default:
      throw Error("undefine type: " + action.type);
  }
}

const props: { items: CartItemsType[] } = {
  items: [
    {
      id: 0,
      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 1,
    },
    {
      id: 1,

      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 3,
    },
    {
      id: 2,

      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 2,
    },
    {
      id: 3,

      name: "Lorem, ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi.",
      image: "https://dummyimage.com/600x400/000/fff",
      price: 1.2,
      quantity: 3,
    },
  ],
};

function Product() {
  const getTotal = () => {
    let total: number = 0;
    props.items.forEach((item) => {
      total += item.price * item.quantity;
    });

    return total.toFixed(2);
  };
  const [myCart, dispatch] = useReducer(inputReducer, props.items);
  const handleCartItemChange = (id: string, quantity: number) => {
    console.log(id + ", " + quantity);
  };

  return (
    <div className="grid grid-cols-4 gap-2 w-[90%] m-auto ">
      {/* items grid */}
      <div className="col-span-3 border-black border-opacity-10 border-2 shadow-lg rounded-md p-5 space-y-5">
        {myCart.items.map((item) => {
          {
            console.log(item.image);
          }

          return (
            <div className="flex space-x-5 justify-around">
              <img className="w-40 h-40" src={item.image} alt="Product image" />
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
                  quantity={item.quantity}
                  changeContext={handleCartItemChange}
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
          {myCart.items.map((item) => {
            return (
              <div className="flex justify-between">
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
              <>{myCart.total}</>
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

export default Product;
