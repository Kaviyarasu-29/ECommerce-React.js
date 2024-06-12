import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { MagnifyingGlass, ShoppingCart, User } from 'phosphor-react'
import WebLogo from '../Assets/Image/Files/webLogo.png'
import { IconShoppingCart, IconUser, IconZoom } from '@tabler/icons-react'

const navbar = () => {
  return (
    <div className='navbar'>

      <div className="web-logo">
        <img src={WebLogo} alt="" srcset="" />
      </div>

      <div className='nav-text' >
        <Link className="nav-text-link" to='/'>Shop</Link>
        <Link className="nav-text-link" to='/Category'>Category</Link>
        <Link className="nav-text-link" to='/AboutUs'>About Us</Link>
        <Link className="nav-text-link" to='/FAQ'>FAQ</Link>
        <Link className="nav-text-link" to='/Blog'>Blog</Link>
        <Link className="nav-text-link" to='/Contact'>Contact</Link>
      </div>

      <div className='links'>
        <Link to='/'>
          <IconZoom stroke={2} />
        </Link>
        <Link to='/Cart'>
          <IconShoppingCart stroke={2} />
        </Link>
        <Link to='/User'>
          <IconUser stroke={2} />
        </Link>
      </div>

    </div>
  )
}

export default navbar
