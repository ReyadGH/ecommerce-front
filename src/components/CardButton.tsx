import buttonDataType from "../types/buttonDataType"

function CardButton(props: buttonDataType){

    return(
        <>
        <button key={props.passedKey} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {props.text}</button>
        </>
    )
}

export default CardButton