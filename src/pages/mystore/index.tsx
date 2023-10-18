import { signIn } from "next-auth/react";
import AdvanceViewer from "../../components/AdvanceViewer";
import ProductCard from "../../components/ProductCard";
import { LoadingData } from "../../components/LoadingData";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import { useContext } from "react";
import { SideBarContext } from "../_app";
import EditForm from "../../components/EditForm";

function MyPage() {
  const { data, isError, isLoading, error } = useQueryFetch({
    url: "http://localhost:8081/product/my",
    key: "my-product-list",
  });

  const sidebarContext = useContext(SideBarContext);

  const showSidebar = (child: any) => {
    sidebarContext.status.set(true);
    sidebarContext.child.set(child);
  };

  if (isLoading) {
    return (
      <>
        <LoadingData text={"please wait, data loading..."} />
      </>
    );
  }
  if (isError) {
    return (
      <div className="text-center">
        <h3>{error.name}</h3>
        <h3>{error.message}</h3>
        <button onClick={() => signIn("keycloak")}>Sign in</button>
      </div>
    );
  }

  const callback = (item: any) => {
    showSidebar(<EditForm item={item} disable={["id"]} url={"/product"} />);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col pt-4">
        <h1 className="px-10 text-3xl">Customers Table</h1>
        <AdvanceViewer
          children={ProductCard}
          items={data}
          options={{ option: true, callback: callback }}
        />
      </div>
    </>
  );
}

export default MyPage;
