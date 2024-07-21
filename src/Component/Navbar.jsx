import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <div className="navbar_Container">
    <div className="navbar_Logo">
        <span>GlamgamsBeauty</span>
    </div>
    <div className="navbar_Menu">
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Products</Link></li>
            <li><Link>Dashboard</Link></li>
        </ul>
    </div>
    <div className="navbar_Icon">
        
    </div>
   </div>
  )
}

export default Navbar