import { MoonLoader } from "react-spinners";

export function LoadingData(props: { text: string }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <MoonLoader className="m-auto" />
        <p className=" pt-8 text-center ">{props.text}</p>
      </div>
    </div>
  );
}
