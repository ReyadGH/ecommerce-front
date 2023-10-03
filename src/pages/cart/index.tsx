function Product() {
  return (
    <div className="grid grid-cols-4 gap-2 w-[90%] m-auto ">
      {/* items grid */}
      <div className="col-span-3 border-black border-opacity-10 border-2 shadow-lg rounded-md p-5 space-y-5">
        <div className="flex space-x-5 justify-around">
          <img
            className="w-40 h-40"
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
          />
          <span>
            <p className="font-bold text-xl">Lorem, ipsum dolor.</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae optio possimus mollitia?
            </p>
          </span>
          <span className="h-min my-auto">
            <button
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
              data-action="increment"
            >
              +
            </button>
            <input
              className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
              type="number"
              min={1}
              value={1}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
              data-action="decrement"
            >
              -
            </button>
          </span>
        </div>
        <div className="flex space-x-5 justify-around">
          <img
            className="w-40 h-40"
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
          />
          <span>
            <p className="font-bold text-xl">Lorem, ipsum dolor.</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae optio possimus mollitia?
            </p>
          </span>
          <span className="h-min my-auto">
            <button
              className=" bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
              data-action="increment"
            >
              +
            </button>
            <input
              className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
              type="number"
              min={1}
              value={1}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
              data-action="decrement"
            >
              -
            </button>
          </span>
        </div>
        <div className="flex space-x-5 justify-around">
          <img
            className="w-40 h-40"
            src="https://dummyimage.com/600x400/000/fff"
            alt=""
          />
          <span>
            <p className="font-bold text-xl">Lorem, ipsum dolor.</p>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae optio possimus mollitia?
            </p>
          </span>
          <span className="h-min my-auto">
            <button
              className=" bg-blue-500 hover:bg-blue-600 p-2 rounded-l-md text-xl text-slate-50 px-4"
              data-action="increment"
            >
              +
            </button>
            <input
              className=" focus:outline-none text-center text-xl w-32 py-2 bg-blue-50"
              type="number"
              min={1}
              value={1}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-r-md text-xl text-slate-50 px-4"
              data-action="decrement"
            >
              -
            </button>
          </span>
        </div>
      </div>
      {/* total grid */}
      <div className="border-black border-opacity-10 border-2 shadow-lg divide-y-2 p-5 rounded-md text-xl h-fit">
        {/* Items List */}
        <div className="px-3 space-y-4 pb-6">
          <div className="flex justify-between">
            <p>Lorem, ipsum dolor.</p>
            <p>
              01 <span>$</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Odio, adipisci perferendis?</p>
            <p>
              02 <span>$</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Assumenda, rem exercitationem.</p>
            <p>
              03 <span>$</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Consequatur, placeat culpa.</p>
          </div>
        </div>
        {/* Items total */}
        <div className=" space-y-4 pt-4">
          <div className="flex px-3 justify-between">
            <p>Your total is.</p>
            <p>
              100 <span>$</span>
            </p>
          </div>
          <button className="bg-blue-500 rounded-md p-2 text-slate-50 w-full hover:bg-blue-600">
            Pay Now
          </button>
      </div>
    </div>
    </div>
  );
}

export default Product;
