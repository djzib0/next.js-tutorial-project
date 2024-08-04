import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={"https://images.pexels.com/photos/27302823/pexels-photo-27302823/free-photo-of-talerz-jagody-owoc-widok-z-gory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            src={"https://images.pexels.com/photos/27302823/pexels-photo-27302823/free-photo-of-talerz-jagody-owoc-widok-z-gory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>John Doe</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04.08.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem, doloremque tenetur reprehenderit iusto qui,
               dolor nobis ipsum impedit earum placeat, natus blanditiis 
               vero quidem dolorum officiis? Pariatur, debitis culpa.
            </p>
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage