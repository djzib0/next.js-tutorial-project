import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

export const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image 
            src={"https://images.pexels.com/photos/27302823/pexels-photo-27302823/free-photo-of-talerz-jagody-owoc-widok-z-gory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt="post picture"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>04.08.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>desc</p>
        <Link 
          href={"/blog/post"}
          className={styles.link}
          >READ MORE</Link>
      </div>
    </div>
  )
}
