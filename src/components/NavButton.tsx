import Link from "next/link";
import buttonDataType from "../types/buttonDataType";

function NavButton(props: buttonDataType) {
  return (
    <li className="hidden select-none rounded-md p-2 px-3 hover:cursor-pointer dark:hover:bg-gray-600 md:inline">
      <Link
        key={"link-" + props.passedKey}
        href={props.herf}
        className=" rounded-md px-5 py-2 text-lg duration-150 ease-in-out"
      >
        {props.text}
      </Link>
    </li>
  );
}

export default NavButton;
