import {
  NumericalInputType,
  actionType,
  actionTypeEnum,
} from "../types/NumeriaclInputType";
import { MdDelete } from "react-icons/md";

function NumericalInput(data: NumericalInputType) {
  const dummyAction: actionType = {
    id: data.id,
    value: data.step || 1,
    type: actionTypeEnum.NONE,
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
          className=" w-8 rounded-l-md bg-blue-500 text-white hover:bg-blue-600 md:p-2 lg:w-10  lg:text-xl"
          key={"input-increment-" + data.id}
          onClick={() =>
            handler({ ...dummyAction, type: actionTypeEnum.INCREASE })
          }
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
              type: actionTypeEnum.UPDATE,
              value: Number(e.target.value),
            })
          }
        />
        {dummyAction.min != data.defualtValue ? (
          <>
            <button
              className=" w-8 rounded-r-md bg-blue-500 text-white hover:bg-blue-600  md:p-2 lg:w-10 lg:text-xl"
              key={"input-decrement-" + data.id}
              onClick={() =>
                handler({ ...dummyAction, type: actionTypeEnum.DECREASE })
              }
            >
              -
            </button>
            <button
              className="ml-4 flex w-8 flex-row items-center justify-center rounded-md bg-red-500 text-white hover:bg-red-600 md:p-2 lg:w-10  lg:text-xl"
              key={"input-btn-cancele-" + data.id}
              onClick={() =>
                handler({ ...dummyAction, type: actionTypeEnum.CANCELE })
              }
            >
              <MdDelete />
            </button>
          </>
        ) : (
          <button
            className="flex w-8 flex-row items-center justify-center rounded-r-md bg-red-500 text-white hover:bg-red-600 md:p-2 lg:w-10  lg:text-xl"
            key={"input-cancele-" + data.id}
            onClick={() =>
              handler({ ...dummyAction, type: actionTypeEnum.CANCELE })
            }
          >
            <MdDelete />
          </button>
        )}
      </div>
    </>
  );
}

export default NumericalInput;
