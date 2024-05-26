import React from 'react'
import NavItem from '../NavItem'

function Nav() {
  return (
    <nav className="flex items-center gap-5">
      <NavItem href='/' label='Beranda' />
      <NavItem href='/' label='Kontak' />
      <NavItem href='/' label='Paket' />
      <NavItem href='/' label='Testimonnial' />
    </nav>
  )
}

export default Nav