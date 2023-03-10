import './Navbar.css'

function Navbar() {
    return (
      <div className='Nav'>
          <nav className='Nav-bar'>
            <ul className='List'>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
              <li>
                <a href='#'>Socials</a>
              </li>
            </ul>
          </nav>
      </div>
    )
  }


export default Navbar;