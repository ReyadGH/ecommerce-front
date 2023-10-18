import { NumericalInputType, actionType } from "../types/NumeriaclInputType";
import { MdDelete } from "react-icons/md";

function NumericalInput(data: NumericalInputType) {
  const dummyAction: actionType = {
    id: data.id,
    value: data.step || 1,
    type: "",
    min: data.min || -999,
    max: data.max || 999,
  };

  const handler = (action: actionType) => {
    // const bounce = debounce(data.changeHandler, 3000);
    // bounce(action);
    data.changeHandler(action);
  };

  return (
    <>
      <div className="flex flex-row ">
        <button
          className=" w-8 rounded-l-md bg-blue-500 hover:bg-blue-600 md:p-2 lg:w-10  lg:text-xl"
          data-action="increment"
          key={"input-increment-" + data.id}
          onClick={() => handler({ ...dummyAction, type: "increment" })}
        >
          +
        </button>
        <input
          className="w-16 border-y-2 border-slate-500 bg-white bg-opacity-5 text-center  focus:outline-none lg:w-32 lg:py-2  lg:text-xl"
          type="number"
          min={dummyAction.min}
          max={dummyAction.max}
          value={data.defualtValue}
          onChange={(e) =>
            handler({
              ...dummyAction,
              type: "change",
              value: Number(e.target.value),
            })
          }
        />
        {dummyAction.min != data.defualtValue ? (
          <button
            className=" w-8 rounded-r-md bg-blue-500 hover:bg-blue-600  md:p-2 lg:w-10   lg:text-xl"
            data-action="decrement"
            key={"input-decrement-" + data.id}
            onClick={() => handler({ ...dummyAction, type: "decrement" })}
          >
            -
          </button>
        ) : (
          <button
            className="flex w-8 flex-row items-center justify-center rounded-r-md bg-red-500 hover:bg-red-600 md:p-2 lg:w-10  lg:text-xl"
            data-action="decrement"
            key={"input-decrement-" + data.id}
            onClick={() => handler({ ...dummyAction, type: "decrement" })}
          >
            <MdDelete />
          </button>
        )}
      </div>
    </>
  );
}

export default NumericalInput;
