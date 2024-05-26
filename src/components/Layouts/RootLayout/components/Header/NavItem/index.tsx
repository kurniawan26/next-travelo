import Link from 'next/link'
import React from 'react'

type NavItemProps = {
  label: string
  href: string
}

function NavItem({ label, href }: NavItemProps) {
  return (
    <Link href={href}>
      <p className='font-bold text-heading-4 text-gray-70 font-label'>{label}</p>
    </Link>
  )
}

export default NavItem