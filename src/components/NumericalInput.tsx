import { NumericalInputType } from "../types/NumeriaclInputType";

function NumericalInput(data: NumericalInputType) {
  let dummyAction = {
    id: data.id,
    value: 0,
    type: "",
    min: data.min || 0,
    max: data.max || 999,
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
        data-action="decrement"
        key={"input-decrement-" + data.id}
        onClick={() =>
          data.changeHandler({
            ...dummyAction,
            type: "decrement",
            value: 1,
          })
        }
      >
        -
      </button>
      <input
        className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
        type="number"
        min={dummyAction.min}
        max={dummyAction.max}
        value={data.defualtValue}
        onInput={(e) =>
          data.changeHandler({
            ...dummyAction,
            type: "change",
            value: e.currentTarget.valueAsNumber,
          })
        }
      />

      <button
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
        data-action="increment"
        key={"input-increment-" + data.id}
        onClick={() =>
          data.changeHandler({
            ...dummyAction,
            type: "increment",
            value: 1,
          })
        }
      >
        +
      </button>
    </>
  );
}

export default NumericalInput;
