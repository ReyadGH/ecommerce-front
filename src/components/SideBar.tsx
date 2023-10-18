import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarContext } from "../pages/_app";

export function SideBar() {
  const sidebarContext = useContext(SideBarContext);
  const sidebar = sidebarContext.child.get();
  return sidebarContext.status.get ? (
    <>
      <div className="fixed right-0  z-10 h-full w-full overflow-auto bg-slate-100 p-4 px-8 pt-16 text-lg dark:bg-gray-700 md:w-5/6 lg:w-3/6">
        <span
          className="absolute left-2 top-2 rounded-md p-2 text-2xl text-red-500 hover:bg-red-600 hover:bg-opacity-10 hover:text-red-600"
          onClick={() => sidebarContext.status.set(false)}
        >
          <AiOutlineClose />
        </span>
        <div className="overflow-y-auto ">
          {sidebar ? <sidebarContext.child.get /> : null}
        </div>
      </div>
      <div
        className="fixed h-full w-full bg-black opacity-50"
        onClick={() => sidebarContext.status.set(false)}
      ></div>
    </>
  ) : null;
}
