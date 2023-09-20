
import { Link } from "react-router-dom";
import buttonDataType from "../types/buttonDataType";

function NavButton(props : buttonDataType){
    return(
    <div className="hover:bg-slate-200 px-5 py-2 rounded-md ease-in-out duration-150 text-lg">
    <Link key={"-"+props.key} to={props.herf} className="hover:bg-slate-200 px-5 py-2 rounded-md ease-in-out duration-150 text-lg">{props.text}</Link>
    </div>);

}

export default NavButton;