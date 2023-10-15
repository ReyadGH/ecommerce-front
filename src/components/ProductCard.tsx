import productDataType from "../types/productDataType";
import ButtonCard from "./CardButton";
function ProductCard(props: { items: productDataType[] }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {props.items.map((item: productDataType) => {
          return (
            // card
            <div
              key={item.id}
              className="flex h-[26rem] w-80 flex-col rounded-md p-5 shadow-xl"
            >
              {/* card-img-top */}
              <img
                className="mx-auto h-52"
                src={item.image}
                alt="Card image cap "
              />
              {/* card-body */}
              <div className=" flex grow flex-col justify-between border-dashed pt-4 ">
                <div>
                  {/* card-title */}
                  <h5 className="text-lg font-bold">{item.name}</h5>
                  {/* card-text */}
                  <p className="line-clamp-3">{item.description}</p>
                  {/* btn btn-primary */}
                </div>
                <ButtonCard
                  key={"card-" + item.id}
                  passedKey={"button-" + item.id}
                  herf="#"
                  text={"buy for $" + item.price}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
