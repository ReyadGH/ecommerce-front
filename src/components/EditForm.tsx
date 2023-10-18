import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { ButtonCallback } from "./ButtonCallback";
import { useContext } from "react";
import { SideBarContext } from "../pages/_app";

const mutateFn = (item: any, session: Session | null, url?: string) => {
  return axios
    .put("http://localhost:8081" + url, {
      body: item,
      headers: {
        Authorization: `Bearer ${
          session != null && session.accessToken ? session.accessToken : ""
        }`,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => err);
};

function EditForm(props: {
  item: { [key: number | string]: object };
  disable?: string[];
  number?: string[];
  removed?: string[];
  queryKey: string[];
  refetch?: () => void;
  url: string;
}) {
  const inputOptions = !props.item ? [] : Object.keys(props.item) || [];

  if (inputOptions.length === 0 || !(inputOptions instanceof Array))
    return <p>No data</p>;
  const context = useContext(SideBarContext);

  const client = useQueryClient();
  const { mutate, error, isError } = useMutation({
    mutationFn: () =>
      getSession().then((session) =>
        mutateFn(
          inputOptions.map((option) =>
            props.removed?.includes(option) ? null : props.item[option],
          ),
          session,
          props.url,
        ),
      ),
    onSuccess: (newCarts) => {
      client.setQueryData(props.queryKey, props.refetch || newCarts);
    },
  });
  console.log(props.item);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="py-4  text-3xl">Edit form</h1>
        {inputOptions.map((option) => {
          return (
            !props.disable?.includes(option) && (
              <span className="flex justify-between">
                <p>{option + " :"}</p>
                <input
                  type={
                    !props.number?.includes(option)
                      ? "textarea"
                      : "number" || "textarea"
                  }
                  className={
                    "border-2 border-slate-500 bg-white bg-opacity-5  focus:outline-none"
                  }
                  defaultValue={String(props.item[option])}
                />
              </span>
            )
          );
        })}
        <ButtonCallback
          text="Update"
          callback={() => {
            context.status.set(false);
            context.child.set(<></>);
            mutate();
          }}
        />
      </div>
    </>
  );
}
export default EditForm;
