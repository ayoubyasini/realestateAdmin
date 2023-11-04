import { getServerSession } from "next-auth";
import {authOptions} from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Signup from '../../../components/template/Signup';

async function page() {
    const session = await getServerSession(authOptions);
  if(session) redirect("/")
  return (
    <div>      
        <Signup />
    </div>
  )
}

export default page