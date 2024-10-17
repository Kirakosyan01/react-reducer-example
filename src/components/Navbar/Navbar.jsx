import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa"
import { MdProductionQuantityLimits } from "react-icons/md";
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
