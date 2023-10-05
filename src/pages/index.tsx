import { signOut, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Index() {
  const { data: session, status } = useSession();
  return (
    <>
      {status == "authenticated" ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        <button onClick={() => signIn()}>Signin</button>
      )}
    </>
  );
}
