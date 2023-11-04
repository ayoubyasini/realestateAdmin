import { getServerSession } from "next-auth";
import {authOptions} from "../../api/auth/[...nextauth]/route";
import SigninPage from "../../../components/template/Signin";
import { redirect } from "next/navigation";
 
async function Signin() {
  const session = await getServerSession(authOptions);
  if(session) redirect("/")
  
  return (
    <div>
        <SigninPage />
    </div>
  )
}

export default Signin