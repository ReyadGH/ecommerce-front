import { Metadata } from "next";
import { AppProps } from "next/app";
import "../public/styles/globals.css";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

const data = {
  title: {
    passedKey: "nav-title-0",
    text: "E-commerce",
    herf: "/",
  },
  buttons: [
    {
      passedKey: "nav-button-1",
      text: "Customers",
      herf: "/customer",
    },
    {
      passedKey: "nav-button-2",
      text: "Products",
      herf: "/product",
    },
    {
      passedKey: "nav-button-3",
      text: "My Store",
      herf: "/mystore",
    },
  ],
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <main className="font-Mono text-gray-600 dark:bg-slate-800 dark:text-gray-300">
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Navbar title={data.title} buttons={data.buttons} />
            <div className={"min-h-screen"}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </QueryClientProvider>
        </SessionProvider>
      </main>
    </>
  );
}
