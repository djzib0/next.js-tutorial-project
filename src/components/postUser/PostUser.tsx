import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";


// FETCH DATA WITH AN API
// const getUser = async (userId: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})

//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json();
// }

type PostUserProps = {

}

const PostUser = async ({userId} : {userId: number | undefined}) => {


  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user && user.name}</span>
    </div>
  )
}

export default PostUser