import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
    name:string,
    path:string,
    className?:string
}

const NavLink = ({name,path,className}:NavLinkProps) => {
  return (
    <Link href={path} className={`${className}`}>{name}</Link>
  )
}

export default NavLink