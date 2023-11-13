import connectDB from "@/public/utils/connectDB";
import { getServerSession } from "next-auth";
import {authOptions} from "../api/auth/[...nextauth]/route.js";
import { redirect } from "next/dist/server/api-utils";
import User from "@/public/models/User.js";
import DashboardSidebar from "@/public/components/layout/Dashboardsidebar.js";
import Adminpage from "@/public/components/template/Adminpage.js";
import Profile from "@/public/models/Profile.js";

export const metadata = {
  title: "real estate | Adam's page",
  description: "Property buying and selling site",
};



async function page() {
    await connectDB();
    const session = await getServerSession(authOptions);
    if(!session) return redirect("/dashboard");

    const user = await User.findOne({email: session.user.email});
    if(user.role !== "ADMIN") redirect("/dashboard");

    const profiles = await Profile.find({published: false});

    return (
      <DashboardSidebar role={user.role} email={user.email}>
        <Adminpage profiles={profiles} />
      </DashboardSidebar>
    );
}

export default page;
