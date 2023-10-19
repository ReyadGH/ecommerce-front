import { signIn } from "next-auth/react";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import AdvanceViewer from "../../components/AdvanceViewer";
import SimpleTable from "../../components/SimpleTable";

export default function OrdersPage() {
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
      <div className="flex min-h-screen flex-col pt-4">
        <h1 className="px-10 text-3xl">My Orders</h1>
        <AdvanceViewer children={SimpleTable} items={data} />
      </div>
    </>
  );
}
