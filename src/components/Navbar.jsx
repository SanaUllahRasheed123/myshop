import React from 'react'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <div className='nav-box'>
      <span className='my_shop'>MyCodeAcademy</span>
      <div className='cart'>
        <span>
      <FontAwesomeIcon icon={faShoppingCart} />

        </span>
        <span>10</span>
      </div>
      {/* <FontAwesomeIcon icon={faHippo} /> */}
        {/* <span>MyCodeAcademy</span> */}
      </div>
    </nav>
  )
}

export default Navbar
