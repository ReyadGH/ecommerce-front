import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const data = {
    title: {
        passedKey:"nav-title-0",
        text:"E-commerce Navbar",
        herf: "/"
    },
    buttons: [
        {
            passedKey: "customer-button-0",
            text: "Customers",
            herf: "/customer",
        },
        {
            passedKey: "customer-button-1",
            text: "Products",
            herf: "/product",
        },
        {
            passedKey: "customer-button-2",
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