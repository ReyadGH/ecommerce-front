function EditForm(props: {
  item: { [key: number | string]: string };
  disable?: string[];
  removed?: string[];
  url: string;
}) {
  console.log(props.item, "items");
  const inputOptions = !props.item ? [] : Object.keys(props.item) || [];
  if (inputOptions.length === 0) return <p>No data</p>;
  return (
    <>
      <div className="flex flex-col gap-4">
        {inputOptions.map((option) => {
          return (
            <span className="flex justify-between">
              <p>{option + " :"}</p>
              <input
                type="text"
                disabled={props.disable?.includes(option) || false}
                className={
                  "border-2 border-slate-500 bg-white bg-opacity-5  focus:outline-none"
                }
                defaultValue={props.item[option]}
              />
            </span>
          );
        })}
      </div>
    </>
  );
}
export default EditForm;
