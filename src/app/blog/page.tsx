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


  // time stamp 2:38:55

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

export default BlogPage
