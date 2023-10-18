import Link from "next/link";
import buttonDataType from "../types/buttonDataType";

function CardButton(props: buttonDataType) {
  return (
    <>
      <Link
        key={props.passedKey}
        href={props.href || "/"}
        className={
          "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" +
          " " +
          props.className
        }
      >
        {props.text}
      </Link>
    </>
  );
}

export default CardButton;
