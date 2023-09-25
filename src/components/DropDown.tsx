import { DropDownType } from "../types/dropDownType";

function DropDown(props: {data: DropDownType;handler: (value: string) => void;}) {

  const handleChange = (e:any) => {
    props.handler(e.target.value);
  };

  return (
    <>
      <select
        onChange={handleChange}
        className="bg-slate-200 px-3 py-1 rounded-md border-2 border-slate-300 hover:border-slate-400 cursor-pointer"
      >
        {props.data.options.map((item) => {
          return (
            <option
              key={item.value + "-" + props.data}
              value={item.value}
            >
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default DropDown;
