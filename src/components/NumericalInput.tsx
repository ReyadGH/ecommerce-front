import { NumericalInputType, actionType } from "../types/NumeriaclInputType";

// function debounce<Params extends any[]>(
//   func: (...args: Params) => any,
//   timeout: number
// ): (...args: Params) => void {
//   let timer: NodeJS.Timeout;
//   return (...args: Params) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, timeout);
//   };
// }

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
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
        data-action="increment"
        key={"input-increment-" + data.id}
        onClick={() => handler({ ...dummyAction, type: "increment" })}
      >
        +
      </button>
      <input
        className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
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
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
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
