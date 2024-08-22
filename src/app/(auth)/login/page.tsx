import { handleGithubLogin, login } from '@/lib/actions';
import styles from "./login.module.css"

const LoginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button>Login with GitHub</button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <form className={styles.form} action={login}>
          <input type='text' placeholder='login' name='username' />
          <input type='password' placeholder='password' name='password' />
          <button>Login</button> 
        </form>
      </div>
    </div>
  )
}

export default LoginPage