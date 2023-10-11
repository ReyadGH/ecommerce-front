import { MoonLoader } from "react-spinners";

export function LoadingData(props: { text: string }) {
  return (
    <div className="pt-[45%]">
      <MoonLoader className="m-auto" />
      <p className=" text-center pt-8 ">{props.text}</p>
    </div>
  );
}
