import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import DropDown from "../components/DropDown";

const url = "http://localhost:8080/product/page?sort=price,asc";

function Product() {
  const [data, setData] = useState({
    items: [],
    isLoaded: false,
  });

  const fetchInfo = () => {
    fetch(url)
      .then((result) => {
        console.log("r", result);
        return result.json();
      })
      .then((d) =>
        setData({
          items: d.content,
          isLoaded: true,
        })
      );
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const options = [
      {
        value: "1",
        text: "option 1",
      },
      {
        value: "2",
        text: "option 2",
      },
      {
        value: "3",
        text: "option 3",
      },

      {
        value: "4",
        text: "option 4",
      },
    ];

  return !data.isLoaded ? (
    <h1>Please wait, data loading</h1>
  ) : (
    <>
      <div className="pt-5">
        <p className="font-bold inline pr-2">Sort by: </p>
        {/* DropDown */}

        <DropDown options={options} />

        <ProductCard items={data.items} />
      </div>
    </>
  );
}

export default Product;
