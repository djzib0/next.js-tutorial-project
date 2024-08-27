import Image from "next/image";
import styles from "./adminPosts.module.css"
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/actions";

const AdminPosts = async () => {

  const posts = await getPosts();


  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
              <Image src={post.avatar || "/noAvatar.png"} alt="user's avatar" width={50} height={50}/>
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="postId" value={post.id}/>
              <button className={styles.postButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default AdminPosts