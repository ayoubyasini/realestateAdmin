import { getServerSession } from 'next-auth';
import {authOptions} from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';

import DashboardSidebar from '@/public/components/layout/Dashboardsidebar';
import React from 'react';

async function DashboardLayout({children}) {
 const session = await getServerSession(authOptions);
  console.log(session)
  if(!session) redirect("/signin")
  return (
    <DashboardSidebar>{children}</DashboardSidebar>
  )
}

export default DashboardLayout