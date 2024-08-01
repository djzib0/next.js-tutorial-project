'use client'

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
// types import
import { LinkObject } from "@/lib/types/types";

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

const Links = () => {

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="max-sm:hidden md:flex items-center gap-2.5" >
        {links.map((link) => {
          return (
            <NavLink key={link.title + link.path} item={link} />
          )
        })
      }
        {session ? (
          <>
            {isAdmin && 
              <NavLink item={{title: "Admin", path: "/admin"}} />}
              <button 
                className="p-2.5 cursor-pointer font-bold bg-white text-slate-900 rounded-sm"
                >Logout</button>
          </>
          ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
          )
        }
      </div>
      <button 
        onClick={() => setOpen(prevState => !prevState)}
        className="flex md:hidden items-center gap-2.5"
      >Menu</button>
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