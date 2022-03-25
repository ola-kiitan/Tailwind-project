import { Link, animateScroll as scroll } from 'react-scroll'

export default function Dropdown({ click, closeMobileMenu }) {
  return (
    <>
      <div className={click ? 'drop-down' : 'drop-down-hidden'}>
        <Link
          className='nav-link'
          to='home'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={closeMobileMenu}
        >
          Home
        </Link>

        <Link
          className='nav-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          to='service'
          onClick={closeMobileMenu}
        >
          Service
        </Link>

        <Link
          className='nav-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          to='project'
          onClick={closeMobileMenu}
        >
          Project
        </Link>

        <Link
          className='nav-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          to='contact'
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </div>
    </>
  )
}
