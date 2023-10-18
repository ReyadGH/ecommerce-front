import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useQueryFetch } from "../hooks/useQueryFetch";

type reviewType = {
  username: string;
  productId: number;
  productName: string;
  description: string;
  stars: number;
  review: string;
  date: Date;
};

export function ReviewsComponent(props: {
  reviewId: number;
  targetURL: "product" | "customer";
}) {
  const { data, isLoading, isError } = useQueryFetch({
    key: `product-${props.reviewId}-review`,
    url: `http://localhost:8081/review/${props.targetURL}/${props.reviewId}`,
  });

  const stars = (stars: number) => {
    let out = [<BsStar />, <BsStar />, <BsStar />, <BsStar />, <BsStar />];
    for (let i = 0; i < out.length; i++) {
      if (stars >= 1) {
        stars--;
        out[i] = <BsStarFill />;
      } else if (stars >= 0.5) {
        stars -= stars;
        out[i] = <BsStarHalf />;
      } else {
        out[i] = <BsStar />;
      }
    }
    return out;
  };

  if (isLoading) {
    return <p>11</p>;
  }
  if (isError) {
    return <p>1132323</p>;
  }

  const reviews = data as reviewType[];

  return (
    <section id="review">
      <div className="container mx-auto px-5 py-24">
        <span className="mb-1 flex flex-row items-center space-x-8 pb-12">
          <h1 className="text-3xl font-medium underline">
            Reviews {reviews.length}
          </h1>
          <span className="flex flex-row items-center text-blue-400">
            {stars(
              reviews.reduce((counter, review) => review.stars + counter, 0) /
                reviews.length,
            ).map((i) => i)}
          </span>
        </span>
        <div className="space-y-8">
          {reviews.map((review) => {
            return (
              <div className="w-full  rounded-md  border-2 ">
                <div className="flex divide-x-2 rounded-t-md border-b-2   p-4">
                  <p className="pr-4">{review.username}</p>
                  <span className="flex space-x-4 pl-4 text-lg">
                    <p className="flex flex-row items-center text-blue-400">
                      {stars(review.stars).map((i) => i)}
                    </p>
                    <p>{review.stars}</p>
                  </span>
                </div>
                <div className="p-4">
                  <p className="pb-4 text-right">Data: {String(review.date)}</p>
                  <p>{review.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
