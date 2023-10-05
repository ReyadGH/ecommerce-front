import { signIn } from "next-auth/react";
import { useFetchData } from "../../hooks/useFetchData";
import CartPage from "./index1";

function PageLayout() {
  const [fetchedData] = useFetchData({
    serverUrl: "http://localhost:8081/cart",
  });
  if (fetchedData.loading) {
    return (
      <>
        <p>please wait, data loading...</p>
      </>
    );
  }
  if (fetchedData.error) {
    return (
      <div className="text-center">
        <h3>{fetchedData.error.code}</h3>
        <h3>{fetchedData.error.message}</h3>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return <CartPage items={fetchedData.response} />;
}

export default PageLayout;
