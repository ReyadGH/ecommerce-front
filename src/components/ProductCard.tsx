import { ButtonCallback } from "./ButtonCallback";
import { SidebarOption } from "../types/SidebarOption";
import productDataType from "../types/productDataType";
import ButtonCard from "./CardButton";
function ProductCard(props: {
  items: productDataType[];
  options?: SidebarOption;
}) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 ">
        {props.items.map((item: productDataType) => {
          return (
            // card
            <div
              key={item.id}
              className="flex h-[26rem] w-80 flex-col rounded-md border-2 border-stone-200 p-5 shadow-lg dark:border-slate-700"
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
                <div className="flex w-full space-x-2">
                  <ButtonCard
                    key={"product-card-" + item.id}
                    href={"product/" + item.id}
                    passedKey={"button-" + item.id}
                    text={"buy for $" + item.price}
                    className="grow"
                  />
                  {props.options?.option && (
                    <ButtonCallback
                      callback={props.options?.callback}
                      text="Edit"
                      item={item}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard;
