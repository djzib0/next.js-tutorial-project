import Links from "./links/Links"
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between h-24 items-center text-white">
      <div className="text-lg font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar