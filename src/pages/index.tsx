import { signIn } from "next-auth/react"

export default function Index(){
 return(<> <button onClick={()=>signIn()}>
    Sign in
 </button>
 </>)
}