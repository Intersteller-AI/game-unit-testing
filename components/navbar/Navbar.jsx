"use client"

import Logo from './logo'
import Content from './content'
import NavLinks from './navlinks'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-center px-12 bg-white drop-shadow' data-testid="navigation-main" aria-label="Main Navigation">      <div className='w-full max-w-[85rem] flex justify-between items-center'>
      <div className='flex-[0.2]'>
        <Logo />
      </div>
      <Content />
      <NavLinks />
    </div>
    </nav>
  )
}

export default Navbar