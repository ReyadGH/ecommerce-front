import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const data = {
    title: {
        text:"E-commerce Navbar",
        herf: "/"
    },
    buttons: [
        {
            text: "Customers",
            herf: "/customer",
        },
        {
            text: "Products",
            herf: "/product",
        },
        {
            text: "Cart",
            herf: "/cart",
        },
    ]
}

function Layout()
{
    return (
        <>
            <Navbar title={data.title} buttons={data.buttons}/>
            <Outlet/>
        </>
    )

}

export default Layout;