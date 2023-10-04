import { useReducer } from "react";
import { NumericalInputType, actionType } from "../types/NumeriaclInputType";

// function inputReducer(data: NumericalInputType, action: actionType) {
//   data.max = data.max || 999;
//   data.min = data.min || 0;
//   console.log(action);
//   switch (action.type) {
//     case "increment":
//       return {
//         ...data,
//         defualtValue:
//           data.defualtValue + action.value > data.max
//             ? data.defualtValue
//             : data.defualtValue + action.value,
//       };
//     case "change":
//       return {
//         ...data,
//         defualtValue:
//           action.value > data.min && action.value < data.max
//             ? data.defualtValue
//             : data.defualtValue + action.value,
//       };
//     case "decrement":
//       return {
//         ...data,
//         defualtValue:
//           data.defualtValue - action.value < data.min
//             ? data.defualtValue
//             : data.defualtValue - action.value,
//       };
//     default:
//       throw Error("undefine type: " + action.type);
//   }
// }

function NumericalInput(data: NumericalInputType) {
  // const [value, dispatch] = useReducer(inputReducer, data);

  const handleChange = (action: actionType) => {
    // dispatch(action);
    // data.changeContext({ id: value.id, quantity: value.defualtValue });

    data.changeContext(action);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
        data-action="increment"
        key={"input-increment-" + data.id}
        onClick={() =>
          handleChange({ id: data.id, type: "increment", value: 1 })
        }
      >
        +
      </button>
      <input
        className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
        type="number"
        min={data.min || 0}
        max={data.max || 999}
        defaultValue={value.defualtValue}
        value={value.defualtValue}
        onChange={(e) =>
          handleChange({
            id: value.id,
            type: "change",
            value: Number(e.target.value),
          })
        }
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
        data-action="decrement"
        key={"input-decrement-" + data.id}
        onClick={() =>
          handleChange({ id: value.id, type: "decrement", value: 1 })
        }
      >
        -
      </button>
    </>
  );
}

export default NumericalInput;
