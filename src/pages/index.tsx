import { DefaultSession } from "next-auth"
import { signOut, useSession } from "next-auth/react"

export default function Index(){
   const { data: session, status} = useSession()
      console.log(session)
 return(<> 

<pre>{status == "authenticated" && session.user?.email}</pre>
<button onClick={()=>signOut()}>Signout</button>
 </>)
}