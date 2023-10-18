import Link from "next/link";
import buttonDataType from "../types/buttonDataType";

function NavButton(props: buttonDataType) {
  return (
    <li
      className="select-none rounded-md p-2 px-3 hover:cursor-pointer
     hover:bg-slate-300 hover:text-blue-500 dark:hover:bg-gray-600
     dark:hover:text-blue-400  
     "
    >
      <Link
        key={"link-" + props.passedKey}
        href={props.href}
        className=" rounded-md px-5 py-2 text-lg duration-150 ease-in-out"
      >
        {props.text}
      </Link>
    </li>
  );
}

export default NavButton;
