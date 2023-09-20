type DropDownType = {
    value: string,
    text: string
}

function DropDown(props: {options: DropDownType[]}) {
  return (
    <>
      <select className="bg-slate-200 px-3 py-1 rounded-md border-2 border-slate-300 hover:border-slate-400 cursor-pointer">
        {props.options.map((item: DropDownType)=>
                <option value={item.value}>{item.text}</option>
        )}
      </select>
    </>
  );
}

export default DropDown;
