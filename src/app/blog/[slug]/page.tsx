import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"
import { Suspense } from "react"
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getSinglePost = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}

// const getUser = async (userId: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json();
// }

export const generateMetadata = async ({params} : {params: {slug: string}}) => {
  const {slug} = params;

  const post = await getPost(slug)

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({params} : {params: {slug: string}}) => {

  const {slug} = params;

  // FETCH DATA WITH AN API
  const post = await getSinglePost(slug);


  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  console.log(post)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && <Image 
          src={post.img}
          alt=""
          fill
          className={styles.img}
        />}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post && post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post && post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>
            <p>
              {post && post.desc}
            </p>
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage