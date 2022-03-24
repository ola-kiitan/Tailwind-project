import { Link } from 'react-router-dom'

export default function Dropdown({ click, closeMobileMenu }) {
  return (
    <>
      <div className={click ? 'drop-down' : 'drop-down-hidden'}>
        <Link className='nav-link' to='/' onClick={closeMobileMenu}>
          Home
        </Link>

        <Link className='nav-link' to='/' onClick={closeMobileMenu}>
          Service
        </Link>

        <Link className='nav-link' to='/' onClick={closeMobileMenu}>
          Project
        </Link>

        <Link className='nav-link' to='/' onClick={closeMobileMenu}>
          Contact
        </Link>
      </div>
    </>
  )
}
