import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
      <div>
      <FontAwesomeIcon icon={faHippo} />
      <FontAwesomeIcon icon={faShoppingCart} />
        {/* <span>MyCodeAcademy</span> */}
      </div>
    </nav>
  )
}

export default Navbar
