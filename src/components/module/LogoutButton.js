"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "./LogoutButton.module.css"


function LogoutButton() {
  return (
    <button className={styles.button} onClick={signOut}>
        logout
        <FiLogOut />
    </button>
  )
}

export default LogoutButton