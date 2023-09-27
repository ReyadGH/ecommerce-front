import { Metadata } from 'next';
import { AppProps } from 'next/app';
import '../public/styles/globals.css'
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

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


export default function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <Navbar title={data.title} buttons={data.buttons} />
      <div className={"min-h-screen"} >
<Component {...pageProps} />
      </div>
      
      <Footer/>
    </>
  )
}