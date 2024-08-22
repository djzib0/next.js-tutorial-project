"use client"

import Link from 'next/link'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTestPage = () => {

  const params = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();



  const q = searchParams.get("q")
  console.log(q, " q value")

  const router = useRouter();

  const handleClick = (route: string) => {
    router.refresh();
  }


  return (
    <div>
      <Link href={"/"} prefetch={false}>Click here</Link>
      <br/>
      <button onClick={() => handleClick("/")}>Home</button>
      <button onClick={() => handleClick("/about")}>About</button>
    </div>
  )
}

export default NavigationTestPage