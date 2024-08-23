"use client"

import styles from "./loginForm.module.css";
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";


const LoginForm = () => {

  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  return (
    <div>
      <form className={styles.form} action={formAction}>
          <input type='text' placeholder='login' name='username' />
          <input type='password' placeholder='password' name='password' />
          <button>Login</button> 
          {state?.error}
          <Link href="/register" className={styles.link}>
            {"Don't Have an account?"} <b>Register</b>
          </Link>
        </form>
    </div>
  )
}

export default LoginForm