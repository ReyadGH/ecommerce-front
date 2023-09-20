
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
        console.log("menu button clicked: "+ menu)
    }

    return (
        <>
            <nav className="flex items-center flex-wrap justify-between bg-slate-300 p-5 mb-1">
                
                {/* Title */}
                <div className="flex flex-shrink-0 tracking-tight text-3xl text-cyan-900 font-bold mx-6">   
                    <Link to="/" className="hover:text-cyan-600 ease-in-out duration-150">Navbar Title</Link>
                </div>

                {/* Items */}
                <div className="space-x-2 hidden md:flex ease-in-out duration-150">
                    {props.buttons.map( (button)=>
                        {
                        console.log(button)
                        return <NavButton key={button.key} herf={button.herf} text={button.text}  />
                        })}
                </div>

                {/* Menu | Cart */}
                
                <div onClick={handleClick} className="space-y-1 md:invisible hover:bg-slate-200 px-3 py-3 ease-in-out duration-150 rounded-md">
                    <div className="w-8 h-[0.3rem] bg-black"></div>
                    <div className="w-8 h-[0.3rem] bg-black"></div>
                    <div className="w-8 h-[0.3rem] bg-black"></div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;