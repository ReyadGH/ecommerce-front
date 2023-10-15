import tableRowDataType from "../types/tableRowDataType";

function SimpleTable(props: tableRowDataType) {
  if (!props.items[0]) {
    return (
      <>
        <p>table empty</p>
      </>
    );
  }

  return (
    <div className="">
      <table className="mx-auto  w-[90%] divide-y shadow-2xl">
        <thead className="">
          <tr>
            {Object.keys(props.items[0]).map((name: string, i: number) => (
              <th
                key={i}
                className="bg-gray-100 px-2 py-3 text-left font-semibold tracking-wider text-gray-600"
                scope="col"
              >
                {name.replace(/^./, name[0].toUpperCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return (
              <tr className="odd:bg-gray-50 even:bg-white hover:bg-gray-200">
                {/*<th scope="row">{item.id}</th>*/}
                {Object.keys(item).map((k: string, j: number) => (
                  <td
                    key={"customer-table-row-" + j}
                    className="border-b border-gray-200 px-2 py-3   text-sm"
                  >
                    <p className="whitespace-no-wrap text-gray-900">
                      {item[k]}
                    </p>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleTable;
