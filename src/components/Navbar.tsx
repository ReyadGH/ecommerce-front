import buttonDataType from "../types/buttonDataType";
import NavButton from "./NavButton";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import { SideBar } from "./SideBar";
import Link from "next/link";
type navbarType = {
  title: buttonDataType;
  buttons: buttonDataType[];
};

function Navbar(props: navbarType) {
  const [menu, setMenu] = useState(false);
  const { status } = useSession();
  function handleClick() {
    setMenu(!menu);
  }

  return (
    <>
      <nav className="flex h-16 w-full items-center justify-between bg-slate-100 px-8 dark:bg-gray-700">
        <h1 className="text-2xl font-bold">
          <Link
            href="/"
            className="text-white duration-150 ease-in-out hover:text-gray-300"
          >
            {props.title.text}
          </Link>
        </h1>
        {/* <span className="space-x-4 lg:inline hidden">
          <input type="text" />
          <button>Search</button>
        </span> */}
        <ul className="flex items-center gap-2 text-lg ">
          {props.buttons.map((button) => {
            return (
              // check role
              <NavButton
                key={button.passedKey}
                passedKey={button.passedKey}
                herf={button.herf}
                text={button.text}
              />
            );
          })}
          {status === "authenticated" ? (
            <>
              <Link
                href={"/cart"}
                className="select-none rounded-md p-2 px-3 hover:cursor-pointer dark:hover:bg-gray-600 "
              >
                <HiShoppingCart />
              </Link>
              <Link
                href={"/api/auth/signout"}
                className="select-none rounded-md p-2 px-3 hover:cursor-pointer dark:hover:bg-gray-600 "
              >
                <HiUser />
              </Link>
            </>
          ) : (
            <li
              onClick={() => signIn("keycloak")}
              className="hidden select-none rounded-md p-2 px-3 hover:cursor-pointer dark:hover:bg-gray-600 md:inline"
            >
              <p>Login</p>
            </li>
          )}

          <li
            onClick={handleClick}
            className="select-none space-y-1 rounded-md px-3 py-3 duration-150 ease-in-out hover:cursor-pointer hover:bg-slate-600 hover:dark:bg-gray-700 md:hidden"
          >
            <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
            <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
            <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
          </li>
        </ul>
      </nav>
      {menu ? (
        <SideBar status={menu} toggleStatus={() => setMenu(!menu)} />
      ) : null}
    </>
  );
}

export default Navbar;
