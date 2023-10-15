import { NumericalInputType, actionType } from "../types/NumeriaclInputType";

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
      <button
        className="rounded-l-md bg-blue-500 p-2 px-4 text-xl text-slate-50 hover:bg-blue-600"
        data-action="increment"
        key={"input-increment-" + data.id}
        onClick={() => handler({ ...dummyAction, type: "increment" })}
      >
        +
      </button>
      <input
        className=" w-32 bg-blue-50 py-2 text-center text-xl focus:outline-none"
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
      <button
        className="rounded-r-md bg-blue-500 p-2 px-4 text-xl text-slate-50 hover:bg-blue-600"
        data-action="decrement"
        key={"input-decrement-" + data.id}
        onClick={() => handler({ ...dummyAction, type: "decrement" })}
      >
        -
      </button>
    </>
  );
}

export default NumericalInput;
