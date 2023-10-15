import { AiOutlineClose } from "react-icons/ai";

export function SideBar(props: { status: boolean; toggleStatus: () => void }) {
  return props.status ? (
    <>
      <div className="absolute right-0  z-10 h-full w-4/6 bg-white p-4 pt-16 md:w-3/6">
        <div className=" w-fit items-start ">
          <span
            className="absolute left-2 top-2 rounded-md p-2 text-2xl text-red-400 hover:bg-red-200 hover:text-red-600"
            onClick={props.toggleStatus}
          >
            <AiOutlineClose />
          </span>
          <main className="space-y-4">
            <h1 className="text-2xl text-black">Title</h1>
            <img src="https://dummyimage.com/250/ffffff/000000" alt="" />
            <p>some content can go here</p>
            <button className="rounded-md bg-blue-400 p-2 hover:to-blue-600">
              Complete
            </button>
          </main>
        </div>
      </div>
      <div
        className="absolute h-full w-full bg-black opacity-50"
        onClick={props.toggleStatus}
      ></div>
    </>
  ) : null;
}
