import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"> cart </i></Link></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar;