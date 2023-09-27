
import Link from "next/link";
import buttonDataType from "../types/buttonDataType";

function NavButton(props : buttonDataType){
    return(
    <div className="hover:dark:bg-gray-700 hover:bg-slate-600 px-5 py-2 rounded-md ease-in-out duration-150 text-lg">
    <Link key={"link-"+props.passedKey} href={props.herf} className=" px-5 py-2 rounded-md ease-in-out duration-150 text-lg">{props.text}</Link>
    </div>);

}

export default NavButton;