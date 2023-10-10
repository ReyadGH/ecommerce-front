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
      className="flex space-x-5 justify-around"
    >
      <img className="w-40 h-40" src={props.item.image} alt="Product image" />
      <div className="w-[60%] pt-2">
        <p className="font-bold text-xl">
          {props.item.name} {props.item.status}
        </p>
        <p className="text-lg text-gray-600 line-clamp-2">
          {props.item.description}
        </p>
      </div>
      <span className="h-min my-auto">
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
