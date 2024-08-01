'use client'

import Link from "next/link";
import { LinkObject } from "@/lib/types/types";
import { usePathname } from "next/navigation";

const NavLink = ({item} : {item: LinkObject}) => {

  const pathName = usePathname();

  return (
    <Link 
      href={item.path} 
      key={item.title + item.path}
      className={`
        ${"min-w-24 p-2.5 rounded-2xl font-medium text-center"}
        ${pathName === item.path && "bg-white text-slate-900"}`}
    >
      {item.title}
    </Link>
  )
}

export default NavLink