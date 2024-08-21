'use client'

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
// types import
import { LinkObject } from "@/lib/types/types";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/actions";
import { Session } from "next-auth";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

interface Session {
  user : {
    isAdmin?: boolean
  }
}

const Links = ({session}: {session: Session}) => {

  //TEMPORARY
  const isAdmin = true;

  const [open, setOpen] = useState(false);
  console.log(session)

  return (
    <div>
      <div className="max-sm:hidden md:flex items-center gap-2.5" >
        {links.map((link) => {
          return (
            <NavLink key={link.title + link.path} item={link} />
          )
        })
      }
        {session?.user ? (
          <>
              {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
            <form action={handleGithubLogout}>
              <button 
                className="p-2.5 cursor-pointer font-bold bg-white text-slate-900 rounded-sm"
                >
                Logout
              </button>
            </form>
          </>
          ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
          )
        }
      </div>
      <Image 
        src={"/menu.png"}
        alt="hamburger button"
        width={30}
        height={30}
        onClick={() => setOpen(prevState => !prevState)}
        className="flex md:hidden"
      />
      {open && (
        <div className="flex md:hidden position: absolute top-24 right-0 w-1/2 flex-col items-center justify-center gap-2.5">
          {links.map((link) => {
            return (
              <NavLink key={link.title} item={link} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Links