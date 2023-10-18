import { MdLocalShipping } from "react-icons/md";

function CheckOut() {
  return (
    <>
      <div className="flex min-h-screen flex-col pt-4">
        <div className="m-auto h-full w-fit items-center rounded-md border-2 border-slate-200 p-10 px-20 ">
          <div className="m-auto w-fit animate-bounce items-center pb-20 pt-4 text-9xl text-lime-400">
            <MdLocalShipping />
          </div>
          <h1 className=" text-xl font-bold">Item is shipping 😉</h1>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
