import { getUsers } from "@/lib/data"
import styles from "./adminUsers.module.css"
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {

  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div className={styles.user} key={user.id}>
            <div className={styles.detail}>
              <Image src={user.avatar || "/noAvatar.png"} alt="user's avatar" width={50} height={50}/>

              <span className={styles.userTitle}>{user.username}</span>
            </div>
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id}/>
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        )
      })}
    </div>
  )
}

export default AdminUsers