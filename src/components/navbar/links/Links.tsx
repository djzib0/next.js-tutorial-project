import React from "react";
import Link from "next/link";
// types import
import { LinkObject } from "@/lib/types/types";

const Links = () => {

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

  return (
    <div className="flex items-center gap-2.5" >
      {links.map((link: LinkObject) => {
        return (
          <Link href={link.path} key={link.title + link.path}>{link.title}</Link>
        )
      })
      }
    </div>
  )
}

export default Links