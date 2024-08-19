import {addPost, deletePost} from "@/lib/actions"
import styles from "./serverActionTest.module.css"

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button className={styles.confirmButton}>Create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="post ID" name="postId"/>
        <button className={styles.confirmButton}>Delete post</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage