import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'

export default function Homepage() {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1
          className='text-3xl font-bold'
        >Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed facere magni neque ea rem. 
        Tempora quasi nam nemo sapiente exercitationem.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} priority/>
      </div>
    </div>
  )
}
