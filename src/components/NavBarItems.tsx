import NavButton from "./NavButton";
import { signIn } from "next-auth/react";
import buttonDataType from "../types/buttonDataType";
export function NavBarItems(props: {
  buttons: buttonDataType[];
  status: "authenticated" | "loading" | "unauthenticated";
  menu?: boolean;
}) {
  console.log(props.menu || false);
  return (
    <ul
      className={
        "items-center gap-2" +
        ` ${
          props.menu || false
            ? "flex h-full flex-col justify-between"
            : " hidden flex-row md:flex"
        }`
      }
    >
      {props.status === "authenticated" ? (
        <>
          {props.buttons.map((button) => {
            return (
              // check role
              <NavButton
                key={button.passedKey}
                passedKey={button.passedKey}
                href={button.href}
                text={button.text}
              />
            );
          })}
        </>
      ) : (
        <li
          onClick={() => signIn("keycloak")}
          className={
            " select-none rounded-md p-2 px-3 hover:cursor-pointer dark:hover:bg-gray-600" +
            ` ${props.menu || false ? "" : "hidden md:inline"}`
          }
        >
          <p>Login</p>
        </li>
      )}
    </ul>
  );
}
