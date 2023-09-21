import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import DropDown from "../components/DropDown";
import { useFetchData } from "../hooks/fetchData";


function Product() {
  // const [data, setData] = useState({
  //   items: [],
  //   isLoaded: false,
  // });
  const url = "http://localhost:8080/product/page";

  const {error, apiData, loaded}= useFetchData({serverUrl:url});

  console.log(apiData)

  // const fetchInfo = () => {
  //   fetch(url)
  //     .then((result) => {
  //       console.log("r", result);
  //       return result.json();
  //     })
  //     .then((d) =>
  //       setData({
  //         items: d.content,
  //         isLoaded: true,
  //       })
  //     );
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  const orderData = {
    selectedId: 0,
    options: [
      {
        value: "asc",
        text: "ascending",
      },
      {
        value: "desc",
        text: "descending",
      },
    ],
  };

  const sortTypeData = () => {
    return {
      selectedId: 0,
      options: Object.keys(data.items[0]).map((item) => {
        return { value: item, text: item };
      }),
    };
  };

  return !data.isLoaded ? (
    <h1>Please wait, data loading</h1>
  ) : (
    <>
      <div className="pt-5">
        {/* sort tab */}
        <input type="text"  />

        <p className="font-bold inline pr-2">Sort by: </p>
        <DropDown data={sortTypeData()} />
        <p className="font-bold inline pr-2">Sort order: </p>
        <DropDown data={orderData} />

        <ProductCard items={data.items} />
      </div>
    </>
  );
}

export default Product;
