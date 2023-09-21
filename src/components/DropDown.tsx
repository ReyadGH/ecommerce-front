import { useState } from "react";

type DropDownType = {
  selectedId: number,
  options:Array<{
    value: string,
    text: string,
  }>
}

function DropDown(props: {data: DropDownType }) {

  const [selected, setSelected] = useState(props.data.selectedId);

  const handleChange = (e) =>{
    setSelected(e.target.value)
  }

  return (
    <>
      <select defaultValue={selected} onChange={handleChange} className="bg-slate-200 px-3 py-1 rounded-md border-2 border-slate-300 hover:border-slate-400 cursor-pointer">
        {props.data.options.map((item)=>
                {
                  return <option key={item.value+"-"+props.data.selectedId} value={item.value}>{item.text}</option>}
        )}
      </select>
    </>
  );
}

export default DropDown;
