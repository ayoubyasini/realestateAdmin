"use client";

import Link from 'next/link';
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import {signIn} from "next-auth/react"
import {Toaster,toast} from "react-hot-toast";
import { ThreeDots } from 'react-loader-spinner';
import styles from "./Signup.module.css";

function SigninPage() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const router = useRouter()

  const signinpHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await signIn("credentials", {email,password,redirect: false})
    setLoading(false)

    if(res.error) {
      toast.error(res.error)
    }else {
        router.push("/")
    }
  }
  
  return (
    <div className={styles.form}>
      <h4>Login form</h4>
      <form>
        <label>email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={signinpHandler}>
            Login
          </button>
        )}
      </form>
      <p>
        You do not have an account
        <Link href="/signup"> signup</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage