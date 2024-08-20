import { signIn } from '@/lib/auth';
import React from 'react'

const LoginPage = () => {

  const handleGithubLogin = async () => {
    "use server";
    await signIn("github")
  }

  // timestamp 3:33:22

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button> 
      </form>
    </div>
  )
}

export default LoginPage