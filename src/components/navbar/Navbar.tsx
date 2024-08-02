import Link from "next/link"
import Links from "./links/Links"
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between h-24 items-center text-white">
      <Link href={"/"} className="text-lg font-bold">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar