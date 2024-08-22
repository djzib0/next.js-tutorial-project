import Link from "next/link"
import Links from "./links/Links"
import styles from './navbar.module.css'
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

const Navbar = async () => {

  const session: Session | null = await auth();

  return (
    <div className="flex flex-row justify-between h-24 items-center text-white">
      <Link href={"/"} className="text-lg font-bold">Logo</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar