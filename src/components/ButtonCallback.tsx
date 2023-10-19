import React from "react";
export function ButtonCallback(props: {
  callback: (arg?: any) => void;
  item?: any;
  text?: string;
  disabled?: boolean;
}) {
  console.log("Button :", props?.disabled || false);
  return props?.disabled || false ? (
    <button
      className="cursor-not-allowed  select-none rounded-md bg-blue-300 px-4
      py-2  font-bold  text-white"
    >
      {props.text}
    </button>
  ) : (
    <button
      onClick={() => props.callback(props.item)}
      className="select-none  rounded-md bg-blue-500 px-4 py-2
      font-bold  text-white hover:cursor-pointer hover:bg-blue-700 "
    >
      {props.text}
    </button>
  );
}
