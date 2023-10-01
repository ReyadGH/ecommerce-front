import { signOut,signIn, useSession } from "next-auth/react"

export default function Index(){
   const { data: session, status} = useSession()
    return(<> 

{status == "authenticated" ? <button onClick={()=>signOut()} >Signout</button> : <button onClick={()=>signIn()}>Signin</button>}
 </>)
}