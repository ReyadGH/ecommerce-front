import { ReviewsComponent } from "../../components/ReviewsComponent";
import { useRouter } from "next/router";
import CardButton from "../../components/CardButton";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import productItemType from "../../types/productDataType";
import { LoadingData } from "../../components/LoadingData";
import { getSession, signIn } from "next-auth/react";
import { useContext } from "react";
import { SideBarContext } from "../_app";
import EditForm from "../../components/EditForm";
import { ButtonCallback } from "../../components/ButtonCallback";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Session } from "next-auth";
import axios from "axios";

const mutateFn = (item: any, session: Session | null) => {
  return axios
    .post("http://localhost:8081/cart", {
      body: item,
      headers: {
        Authorization: `Bearer ${
          session != null && session.accessToken ? session.accessToken : ""
        }`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err);
};

function ProductItemPage() {
  const router = useRouter();

  const { data, isError, isFetching, error, isLoading } = useQueryFetch({
    url: `http://localhost:8081/product/${router.query.id}`,
    key: `productId-${router.query.id}`,
  });

  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (item: any) =>
      getSession().then((session) => mutateFn(item, session)),
    onSuccess: (newProduct) => {
      client.setQueryData([`productId-${router.query.id}`], newProduct);
    },
    onError: (error) => console.error(error),
  });
  const session = getSession();

  const sidebarContext = useContext(SideBarContext);

  const showSidebar = (child: any) => {
    sidebarContext.status.set(true);
    sidebarContext.child.set(child);
  };

  if (isLoading || isFetching) {
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
  const product = data as productItemType;

  const callbackEdit = (item: any) => {
    showSidebar(
      <EditForm
        queryKey={[`productId-${router.query.id}`]}
        item={item}
        disable={["id", "owner"]}
        number={["price"]}
        url={"/product/" + item.id}
      />,
    );
  };
  const callbackAdd = (item: any) => {
    mutate({ id: item.id, quantity: 1 });
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              className="max-h-[32rem] w-full rounded border border-gray-200 object-cover object-center lg:w-[50%] "
              src={product.image}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h1 className="title-font mb-1 text-3xl font-medium ">
                {product.name}
              </h1>
              <h2 className="title-font text-sm tracking-widest">
                item #{product.id}
              </h2>
              <p className="pt-8 leading-relaxed">{product.description}</p>
              <div className="flex pt-8">
                <span className="title-font text-2xl font-medium ">
                  ${product.price.toFixed(2)}
                </span>
                <ButtonCallback
                  text="Add to cart"
                  callback={callbackAdd}
                  item={product}
                />
                {
                  <ButtonCallback
                    text="Edit"
                    callback={callbackEdit}
                    item={product}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewsComponent reviewId={product.id} targetURL="product" />
    </>
  );
}

export default ProductItemPage;
