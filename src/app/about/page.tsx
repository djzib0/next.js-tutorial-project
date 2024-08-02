import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      {/* <Image src="/about.png" alt='' width={500} height={500}/> */}
      <div className={styles.container}>
        <Image src="/about.png" alt='' fill/>
      </div>
      <Image src='https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
      alt='' 
      width={400} height={250}/>
    </div>
  )
}

export default AboutPage