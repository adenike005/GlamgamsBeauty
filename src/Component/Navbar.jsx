import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

import { IoPerson, IoPersonCircle, IoPersonAdd, IoPersonOutline,  IoCart } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
  <div className="header">
    <Link to='/'>
    <h4>GlamgamsBeauty</h4>
    </Link>

    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Products</Link></li>
    </ul>

    <div className="header_icon">
  <IoPersonCircle size={30} color="#fff" className='Icon' />
  <IoCart size={30} color="#fff" title="Cart"  className='Icon'/>

  <div className="hamburger" onClick={handleClick}>
    {click ? <FaTimes size={24} color="#fff"/> : <FaBars size={24} color="#fff"/>}
       
    </div>
    </div>

   

  </div>
  )
}

export default Navbar

