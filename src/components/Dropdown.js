import { Link } from 'react-router-dom'

export default function Dropdown({ click, closeMobileMenu }) {
  return (
    <>
      <div className={click ? 'drop-down' : 'drop-down-hidden'}>
        <Link className='p-4' to='/' onClick={closeMobileMenu}>
          Home
        </Link>

        <Link className='p-4' to='/' onClick={closeMobileMenu}>
          Home
        </Link>

        <Link className='p-4' to='/' onClick={closeMobileMenu}>
          Home
        </Link>

        <Link className='p-4' to='/' onClick={closeMobileMenu}>
          Home
        </Link>
      </div>
    </>
  )
}
