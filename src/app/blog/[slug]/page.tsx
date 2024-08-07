import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"

const getSinglePost = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}

const getUser = async (userId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}

const SinglePostPage = async ({params} : {params: {slug: string}}) => {

  const {slug} = params;

  const post = await getSinglePost(slug);

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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
            src={"https://images.pexels.com/photos/27302823/pexels-photo-27302823/free-photo-of-talerz-jagody-owoc-widok-z-gory.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04.08.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            <p>
              {post.body}
            </p>
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage