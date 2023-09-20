import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const data = {
    title: {
        text:"E-commerce Navbar",
        herf: "/"
    },
    buttons: [
        {
            key: "customer-button-0",
            text: "Customers",
            herf: "/customer",
        },
        {
            key: "customer-button-1",
            text: "Products",
            herf: "/product",
        },
        {
            key: "customer-button-2",
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