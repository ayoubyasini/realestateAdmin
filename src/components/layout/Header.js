"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import {CgProfile} from "react-icons/cg";

function Header() {

    const {data} = useSession();

    return (
      <header className={styles.header}>
        <div>
          <ul>
            <li>
              <Link href="/">Main Page</Link>
            </li>
            <li>
              <Link href="/buy-residential">Advertisements </Link>
            </li>
          </ul>
        </div>
        <div className={styles.login}>
          {data ? (
            <Link href="/dashboard">
              <CgProfile />
            </Link>
          ) : (
            <Link href="/signin">
              <span>log in</span>
              <FiLogIn />
            </Link>
          )}
        </div>
      </header>
    );
}

export default Header;