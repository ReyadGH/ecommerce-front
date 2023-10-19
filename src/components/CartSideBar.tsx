import { signIn } from "next-auth/react";
import { useQueryFetch } from "../hooks/useQueryFetch";
import { CartItemsStatus, CartItemsType } from "../types/CartItemsType";
import { LoadingData } from "./LoadingData";
import { MyCart } from "./MyCart";
import _ from "underscore";

function CartPage() {
  const { data, isLoading, isError, error } = useQueryFetch({
    url: "http://localhost:8081/cart",
    key: ["cart-page"],
  });

  if (isLoading) {
    return (
      <>
        <LoadingData text={"please wait, data loading..."} />
      </>
    );
  }
  if (isError || !(data instanceof Array)) {
    return (
      <div className="text-center">
        <h3>{error?.name || "Fetching Error"}</h3>
        <h3>{error?.message || "An error occured while fetching data"}</h3>
        {error && <button onClick={() => signIn("keycloak")}>Sign in</button>}
      </div>
    );
  }

  return (
    <>
      {
        <MyCart
          carts={data.filter((cart) => cart.status == CartItemsStatus.DRAFT)}
          title="My Cart"
          showOptions={true}
        />
      }
    </>
  );
}

export default CartPage;
