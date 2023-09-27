
import { Metadata } from "next";
import { Footer } from "./Footer";
import Navbar from "./Navbar";
export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

const data = {
  title: {
    passedKey: "nav-title-0",
    text: "E-commerce Navbar",
    herf: "/",
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
  ],
};
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar title={data.title} buttons={data.buttons} />
      <main>{children}</main>
      <Footer />
    </>
  )
}