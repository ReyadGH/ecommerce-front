import { CartItemsType } from "../types/CartItemsType";
import { actionType } from "../types/NumeriaclInputType";
import NumericalInput from "./NumericalInput";

const CartItemCard = (props: {
  item: CartItemsType;
  childHandler: (action: actionType) => void;
  showOptions: boolean;
}) => {
  return (
    <div
      key={props.item.id + "-grid-item"}
      className="flex justify-around space-x-5"
    >
      <img className="h-40 w-40" src={props.item.image} alt="Product image" />
      <div className="w-[60%] pt-2">
        <p className="text-xl font-bold">
          {props.item.name} {props.item.status}
        </p>
        <p className="line-clamp-2 text-lg text-gray-600">
          {props.item.description}
        </p>
      </div>
      <span className="my-auto h-min">
        {props.showOptions && (
          <NumericalInput
            id={props.item.id}
            defualtValue={props.item.quantity}
            changeHandler={props.childHandler}
            min={1}
            max={99}
          />
        )}
      </span>
    </div>
  );
};

export default CartItemCard;
