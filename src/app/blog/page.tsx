import { PostCard } from '@/components/postCard/PostCard';
import styles from './blog.module.css';
import {getPosts} from '@/lib/data'

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

const BlogPage = async () => {

  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts && posts.map((post: {userId: number, slug: number, title: string, body: string, createdAt: Date}) => {
        return (
          <div className={styles.post} key={post.slug}>
            <PostCard post={post}/>
          </div>
        )
      })}

    </div>
  )
}

export default BlogPage
