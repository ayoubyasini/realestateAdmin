import DashboardPage from "@/public/components/template/DashboardPage"
import User from "@/public/models/User";
import connectDB from "@/public/utils/connectDB";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(AuthOptions);
  const user = await User.findOne({email: session.user.email});

  return (
    <DashboardPage createdAt={user.createAt} />
  )
}

export default Dashboard