import { ReviewsComponent } from "../../components/ReviewsComponent";
import { useRouter } from "next/router";
import CardButton from "../../components/CardButton";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import productItemType from "../../types/productDataType";
import { LoadingData } from "../../components/LoadingData";
import { signIn } from "next-auth/react";

function ProductItemPage() {
  const router = useRouter();
  const { data, isError, error, isLoading } = useQueryFetch({
    url: `http://localhost:8081/product/${router.query.id}`,
    key: `productId-${router.query.id}`,
  });

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
  const product = data as productItemType;

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
                <CardButton href="/a" text="Buy" className="ml-auto" />
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
