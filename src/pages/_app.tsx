import { Metadata } from "next";
import { AppProps } from "next/app";
import "../public/styles/globals.css";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import { SideBar } from "../components/SideBar";
import { SideBarContextType } from "../types/SideBarContextType";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

const data = {
  title: {
    passedKey: "nav-title-0",
    text: "E-commerce",
    href: "/",
  },
  buttons: [
    {
      passedKey: "nav-button-1",
      text: "Customers",
      href: "/customer",
    },
    {
      passedKey: "nav-button-2",
      text: "Products",
      href: "/product",
    },
    {
      passedKey: "nav-button-3",
      text: "My Store",
      href: "/mystore",
    },
    {
      passedKey: "nav-button-4",
      text: "My Orders",
      href: "/orders",
    },
  ],
};

export const SideBarContext = React.createContext({} as SideBarContextType);

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // hooks
  const queryClient = new QueryClient();
  const [sideBar, setSidebar] = useState(false);
  const [sideBarChid, setSidebarChid] = useState(undefined as any);

  // context handlers
  const changeChild = (child: JSX.Element | Element) => {
    setSidebarChid(child);
  };
  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <main className="font-Mono text-gray-600 dark:bg-slate-800 dark:text-gray-300">
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <SideBarContext.Provider
              value={{
                status: { get: sideBar, set: toggleSideBar },
                child: { get: () => sideBarChid, set: changeChild },
              }}
            >
              <SideBar />
              <Navbar title={data.title} buttons={data.buttons} />

              <Component {...pageProps} />
            </SideBarContext.Provider>
            <Footer />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </SessionProvider>
      </main>
    </>
  );
}
