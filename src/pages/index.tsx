import { signOut, signIn, useSession } from "next-auth/react";

export default function Index() {
  const { status } = useSession();
  return (
    <>
      <div className=" flex min-h-screen flex-col pt-4">
        {status == "authenticated" ? (
          <button className="m-auto" onClick={() => signOut()}>
            Signout
          </button>
        ) : (
          <button className="m-auto" onClick={() => signIn("keycloak")}>
            Signin
          </button>
        )}
      </div>
    </>
  );
}
