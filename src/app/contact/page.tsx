import Image from 'next/image'
import styles from './contact.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Next.js starter app description",
};

const ContactPage = () => {

  const a = Math.random()

  console.log(a);


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={"/contact.png"}
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div suppressHydrationWarning>
        {a}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone number (Optional)' />
          <textarea name='' id='' cols={30} rows={10} placeholder='Message' />
          <button 
            className={styles.button}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage