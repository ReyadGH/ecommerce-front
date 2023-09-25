import { DropDownType } from "../types/dropDownType";
import DropDown from "./DropDown";

type ProductFilterType = {
  filter: DropDownType;
  submit: (filtters: string) => void;
};
let filters: any = {
  sort: "id",
  order: "asc",
};

function ProductFilter(props: ProductFilterType) {
  const handelSubmit = (target: string, value: string) => {
    filters[target] = value;
    props.submit(filters.sort + "," + filters.order);
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
    <div className="rounded flex flex-col md:flex-row flex-wrap items-center w-full p-2 shadow-sm border space-y-3 space-x-3 border-gray-200">
      {/* search bar */}
      
      <span className="outline-none flex items-center space-x-2 divide-x-2 grow w-full md:w-auto px-2 border border-gray-200 rounded-md">
        <svg
          className=" w-5 text-gray-600 h-5 "
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
        type="text"
        className=" p-2 text-lg grow outline-none focus:outline-none "
      />
      </span>

      {/* select */}
      <span >
        <label className="font-bold inline pr-2">Sort by: </label>
        <DropDown
          data={props.filter}
          handler={(by: string) => handelSubmit("sort", by)}
        />
        <label className="font-bold inline pr-2 pl-5">Sort order: </label>
        <DropDown
          data={orderData}
          handler={(by: string) => handelSubmit("order", by)}
        />
      </span>
    </div>
  );
}
export default ProductFilter;
