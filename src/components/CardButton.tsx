import buttonDataType from "../types/buttonDataType";

function CardButton(props: buttonDataType) {
  return (
    <>
      <button
        key={props.passedKey}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        {" "}
        {props.text}
      </button>
    </>
  );
}

export default CardButton;
