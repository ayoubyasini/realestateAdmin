import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "../module/LogoutButton";
import styles from "./Dashboardsidebar.module.css";

async function DashboardSidebar({ role,email,children }) {
    
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <h6>{role === "ADMIN" ? "admin" : null}</h6>
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">Account</Link>
        <Link href="/dashboard/my-profiles">My ads</Link>
        <Link href="/dashboard/add">Advertisement registration</Link>
        {role === "ADMIN" ? (
          <Link href="/admin">in progress!</Link>
          ) : null}
          <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;