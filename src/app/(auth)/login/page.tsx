import { handleGithubLogin } from '@/lib/actions';
import styles from "./login.module.css"
import { useFormState } from 'react-dom';
import LoginForm from '@/components/loginForm/LoginForm';

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
      </div>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage