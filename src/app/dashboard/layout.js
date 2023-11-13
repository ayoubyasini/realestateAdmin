import { getServerSession } from 'next-auth';
import {authOptions} from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import DashboardSidebar from '@/public/components/layout/Dashboardsidebar';
import React from 'react';
import connectDB from '@/public/utils/connectDB';
import User from '@/public/models/User';

export const metadata = {
  title: "real estate | Adam's page",
  description: "Property buying and selling site",
};


async function DashboardLayout({children}) {
 const session = await getServerSession(authOptions);
  if(!session) redirect("/signin")

  await connectDB();
  const user = await User.findOne({email: session.user.email});

  if(!user) return <h3>Something went wrong. Please sign in again later</h3>;

  return (
    <DashboardSidebar role={user.role} email={user.email}>{children}</DashboardSidebar>
  )
}

export default DashboardLayout