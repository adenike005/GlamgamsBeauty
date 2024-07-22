// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../Style/Navbar.css";
// import { List, X , ShoppingCart, User, MagnifyingGlass} from '@phosphor-icons/react';

// function Navbar() {
//   return (
//     <div className="header">
//       <ul className="nav-menu">
//         <li><Link>Shop </Link></li>
//         <li><Link>DashBoard </Link></li>
//         <li><Link>Shop </Link></li>
//       </ul>
//       <div className="logo">GemGlam</div>
//       <div className="icon">
//        <div className="box">
//        {/* <input  type="name"/> */}
//        <span>Search Product's Here</span>
//        <MagnifyingGlass size={20} color="#000"/>
//        </div>
//       <div className="icons">
//       <ShoppingCart size={20} color="#000"/>
//       <User size={20} color="#000"/>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import { List, X ,ShoppingCart, User, MagnifyingGlass } from '@phosphor-icons/react';

function Navbar() {

  const [click , setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // State for managing the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handler for form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search action, e.g., navigate to a search results page
    console.log("Search for:", searchQuery);
    // For example, you might navigate to a search results page
    // navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="header">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?  <X size={16} color="#434242eb" /> : <List size={16} color="#434242eb" />}
        
       
      </div>
      <div className="logo">GemGlam</div>
      <div className="icon">
      
        <div className="icons">
          <div className="iconbox">

          <ShoppingCart size={16} color="#434242eb"/>
          </div>
          <div className="iconbox">

          <User size={16} color="#434242eb" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
