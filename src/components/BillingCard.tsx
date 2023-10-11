import { CartItemsType } from "../types/CartItemsType";

export function BillingCard(props: { carts: CartItemsType[] }) {
  const eror = () => {
    throw Error("error");
  };
  return (
    <div className="border-black border-opacity-10 border-2 shadow-lg divide-y-2 p-5 rounded-md text-xl h-fit">
      <h1 className="text-3xl pl-4 py-4"> Bill </h1>

      {/* Items List */}
      <div className="px-3 space-y-4 py-6">
        {props.carts.map((item) => {
          return (
            <div key={item.id + "-total-item"} className="flex justify-between">
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
              {props.carts
                .reduce((p, c) => p + c.price * c.quantity, 0)
                .toFixed(2)}
            </>
          </p>
        </div>
        <button
          className="bg-blue-500 rounded-md p-2 text-slate-50 w-full hover:bg-blue-600"
          onClick={() => eror()}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
