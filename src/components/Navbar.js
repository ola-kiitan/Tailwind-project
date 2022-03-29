import React, { useState } from 'react'
import { Link } from 'react-scroll'

import Dropdown from './Dropdown'
export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
    console.log('clicked')
  }
  const closeMobileMenu = () => {
    setClick(false)
    console.log('closed')
  }
  return (
    <>
      <nav className='flex justify-between items-center h-16 bg-gray-900 text-white relative shadow-sm font-mono role="navigation'>
        <Link
          to='home'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          className='italic text-3xl cursor-pointer '
        >
          YEMKAS
        </Link>
        <div className={'nav-menu'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={handleClick}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className=' nav'>
          <Link
            className='p-4 cursor-pointer'
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Home
          </Link>
          <Link
            className='p-4 cursor-pointer'
            to='service'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Service
          </Link>
          <Link
            className='p-4 cursor-pointer'
            to='project'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Project
          </Link>
          <Link
            className='p-4 cursor-pointer'
            to='contact'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </nav>
      <Dropdown closeMobileMenu={closeMobileMenu} click={click} />
    </>
  )
}
