import { signIn } from "next-auth/react";
import { useFetchData } from "../../hooks/useFetchData";
import CartPage from "./CartPage";
import { LoadingData } from "../../components/LoadingData";
import { ErrorBoundary } from "react-error-boundary";

function PageLayout() {
  const [fetchedData] = useFetchData({
    serverUrl: "http://localhost:8081/cart",
  });
  if (fetchedData.loading) {
    return (
      <>
        <LoadingData text={"please wait, data loading..."} />{" "}
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

  return (
    <>
      <ErrorBoundary fallback={<p>Error</p>}>
        <CartPage items={fetchedData.response} />
      </ErrorBoundary>
    </>
  );
}

export default PageLayout;
