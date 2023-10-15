import { filterSearchType, searchFilterType } from "../types/searchFilterType";
import DropDown from "./DropDown";

function ProductFilter(props: searchFilterType) {
  const handelSubmit = (values: filterSearchType) => {
    props.submit(values);
  };

  const orderData = {
    options: [
      {
        value: "asc",
        text: "ascending",
      },
      {
        value: "desc",
        text: "descending",
      },
    ],
  };

  return (
    <div className="flex w-full flex-col flex-wrap items-center space-x-3 space-y-3 rounded border border-gray-200 p-2 shadow-sm md:flex-row">
      {/* search bar */}

      <span className="flex w-full grow items-center space-x-2 divide-x-2 rounded-md border border-gray-200 px-2 outline-none md:w-auto">
        <svg
          className=" h-5 w-5 text-gray-600 "
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          type="text"
          className=" grow p-2 text-lg outline-none focus:outline-none "
          onChange={(e) => handelSubmit({ searchValue: e.target.value })}
        />
      </span>

      {/* select */}
      <span>
        <label className="inline pr-2 font-bold">Sort by: </label>
        <DropDown
          data={props.filter}
          handler={(by: string) => handelSubmit({ filterTarget: by })}
        />
        <label className="inline pl-5 pr-2 font-bold">Sort order: </label>
        <DropDown
          data={orderData}
          handler={(by: string) =>
            handelSubmit({ sortOrder: by as "asc" | "desc" })
          }
        />
      </span>
    </div>
  );
}
export default ProductFilter;
