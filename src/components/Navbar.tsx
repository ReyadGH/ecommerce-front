
import { Link } from "react-router-dom";
import buttonDataType from "../types/buttonDataType";
import NavButton from "./NavButton";
import { useState } from "react";

type navbarType = {   
    title: buttonDataType,
    buttons: buttonDataType[];
}

function Navbar(props: navbarType) {
    const [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu(!menu)
    }

    return (
        <>
            <nav className="flex items-center flex-wrap justify-between bg-white dark:bg-gray-900 shadow-md p-5 mb-1 text-gray-600 dark:text-gray-300">
                
                {/* Title */}
                <div className="flex flex-shrink-0 tracking-tight text-3xl  font-bold ">   
                    <Link to="/" className="hover:text-gray-300 text-white ease-in-out duration-150">{props.title.text}</Link>
                </div>

                {/* Items */}
                <div className="space-x-2 hidden md:flex ease-in-out duration-150">
                    {props.buttons.map( (button)=>
                        {
                        return <NavButton key={button.passedKey} passedKey={button.passedKey} herf={button.herf} text={button.text}  />
                        })}
                </div>

                {/* Menu | Cart */}
                
                <div onClick={handleClick} className="space-y-1 md:invisible hover:dark:bg-gray-700 hover:bg-slate-600 px-3 py-3 ease-in-out duration-150 rounded-md">
                    <div className="w-8 h-[0.3rem] bg-black  dark:bg-white "></div>
                    <div className="w-8 h-[0.3rem] bg-black  dark:bg-white "></div>
                    <div className="w-8 h-[0.3rem] bg-black  dark:bg-white "></div>
                </div>
                {/* <div>
                    <div className="w-8 h-[0.3rem] bg-black  rotate-45 "> 
                    <div className="w-8 h-[0.3rem] bg-black  relative -rotate-90"> </div></div>
                    
                </div> */}
            </nav>
        </>

    );
}

export default Navbar;