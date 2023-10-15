import { ChangeEvent } from "react";
import { DropDownType } from "../types/dropDownType";

function DropDown(props: {
  data: DropDownType;
  handler: (value: string) => void;
}) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.handler(e.target.value);
  };

  return (
    <>
      <select
        onChange={(e) => handleChange(e)}
        className="cursor-pointer rounded-md border-2 border-slate-300 bg-slate-200 px-3 py-1 hover:border-slate-400"
      >
        {props.data.options.map((item) => {
          return (
            <option key={item.value + "-" + props.data} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default DropDown;
