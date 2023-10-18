import buttonDataType from "../types/buttonDataType";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import { SideBarContext } from "../pages/_app";
import { NavBarItems } from "./NavBarItems";
import CartPage from "./CartSideBar";
type navbarType = {
  title: buttonDataType;
  buttons: buttonDataType[];
};

function Navbar(props: navbarType) {
  const { status } = useSession();
  const sidebarContext = useContext(SideBarContext);

  const showSidebar = (child: any) => {
    sidebarContext.status.set(true);
    sidebarContext.child.set(child);
  };

  return (
    <>
      <nav className="flex h-16 w-full items-center justify-between bg-slate-100 px-8 dark:bg-gray-700">
        <h1 className="text-2xl font-bold">
          <Link
            href="/"
            className=" text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            {props.title.text}
          </Link>
        </h1>
        <NavBarItems buttons={props.buttons} status={status} menu={false} />
        <span className="flex">
          <button
            onClick={() => showSidebar(<CartPage />)}
            className="select-none rounded-md p-4 px-4 hover:cursor-pointer
              hover:bg-slate-300 hover:text-blue-500 dark:hover:bg-gray-600
              dark:hover:text-blue-400 "
          >
            <HiShoppingCart />
          </button>
          <Link
            href={"/api/auth/signout"}
            className="select-none rounded-md p-4 px-4 hover:cursor-pointer hover:text-blue-500 dark:hover:bg-gray-600
              dark:hover:text-blue-400 "
          >
            <HiUser />
          </Link>
        </span>
        <span
          onClick={() =>
            showSidebar(
              <NavBarItems
                buttons={props.buttons}
                status={status}
                menu={true}
              />,
            )
          }
          className="select-none space-y-1 rounded-md px-3 py-3 duration-150 ease-in-out hover:cursor-pointer hover:bg-slate-600 hover:dark:bg-gray-700 md:hidden"
        >
          <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
          <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
          <div className="h-[0.225rem] w-6 rounded-md bg-black  dark:bg-gray-300 "></div>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
