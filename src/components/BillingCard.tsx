import { CartItemsType } from "../types/CartItemsType";

export function BillingCard(props: { carts: CartItemsType[] }) {
  const eror = () => {
    throw Error("error");
  };
  return (
    <div className="h-fit divide-y-2 rounded-md border-2 border-black border-opacity-10 p-5 text-xl shadow-lg">
      <h1 className="py-4 pl-4 text-3xl"> Bill </h1>

      {/* Items List */}
      <div className="space-y-4 px-3 py-6">
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
        <div className="flex justify-between px-3">
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
          className="w-full rounded-md bg-blue-500 p-2 text-slate-50 hover:bg-blue-600"
          onClick={() => eror()}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
