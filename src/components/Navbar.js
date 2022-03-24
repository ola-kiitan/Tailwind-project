import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/' className='italic text-3xl '>
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
          <Link className='p-4' to='/'>
            Home
          </Link>
          <Link className='p-4' to='/service'>
            Service
          </Link>
          <Link className='p-4' to='/project'>
            Project
          </Link>
          <Link className='p-4' to='/contact'>
            Contact
          </Link>
        </div>
      </nav>
      <Dropdown closeMobileMenu={closeMobileMenu} click={click} />
    </>
  )
}
