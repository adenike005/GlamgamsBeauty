// // src/components/Register.js
// import React, { useState } from 'react';
// import { account } from '../appwrite';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await account.create('unique()', email, password, name);
//       console.log('Registration successful:', response);
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import '../Style/Register.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <main>
//       <div className="box">
//         <div className="inner-box">
//           <div className="form-wrap">
//             <form action="" autoComplete="off" className="sign-in-form">
//               <div className="heading">
//                 <h2>Welcome to GlamgamsBeauty</h2>
//                 <h6>Already have an account?</h6>
//                 <Link to="/login">Sign In</Link>
//               </div>
//               <div className="actual-form">
//                 <div className="input-wrap">
//                   <input
//                     type="text"
//                     minLength="4"
//                     className="input-field"
//                     autoComplete="off"
//                     required
//                     id="name"
//                   />
//                   <label htmlFor="name">Name</label>
//                 </div>
//                 <div className="input-wrap">
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     minLength="4"
//                     className="input-field"
//                     autoComplete="off"
//                     required
//                     id="pass"
//                   />
//                   <label htmlFor="pass">Password</label>
//                   <FontAwesomeIcon
//                     icon={showPassword ? faEyeSlash : faEye}
//                     className="password-toggle"
//                     onClick={togglePasswordVisibility}
//                   />
//                 </div>
//                 <div className="input-wrap">
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     minLength="4"
//                     className="input-field"
//                     autoComplete="off"
//                     required
//                     id="confirm-pass"
//                   />
//                   <label htmlFor="confirm-pass">Confirm Password</label>
//                   <FontAwesomeIcon
//                     icon={showConfirmPassword ? faEyeSlash : faEye}
//                     className="password-toggle"
//                     onClick={toggleConfirmPasswordVisibility}
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="carousel"></div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Register;

import React from "react";
import "../Style/Register.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import about from '../../public/images/about.png'

function Register() {
  return (
   <div className="form_Contain">
     <div className="container">
      {/* <h1>Welcome to GemGlam</h1> */}

      <div className="form_contains">
        <div className="form_box1">
          <img src={about} alt="image"/>
        </div>
        <div className="form_box1"></div>
      </div>
     </div>
   </div>
  );
}

export default Register;
