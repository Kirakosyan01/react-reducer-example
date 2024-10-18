import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa"
import { MdProductionQuantityLimits } from "react-icons/md";
import './Navbar.css';

export default function Navbar() {
  
  return (
    <nav className='nav'>
      <div className='nav_div'>
      <div className='color_div'></div>
      <div className='link_flex'>
      <NavLink to="users" className='usersIcon'><FaUsers /><p>Users</p></NavLink>
      <NavLink to="/"className='homeIcon' ><IoHomeOutline /><p>Home</p></NavLink>
      <NavLink to="products" className='productsIcon'><MdProductionQuantityLimits /><p>Products</p></NavLink>
      </div>
      </div>
    </nav>
  )
}
