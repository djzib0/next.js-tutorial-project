import { PostCard } from '@/components/postCard/PostCard'
import styles from './blog.module.css'

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const Blog = async () => {

  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts && posts.map((post: {userId: number, id: number, title: string, body: string}) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
          </div>
        )
      })}

    </div>
  )
}

export default Blog
