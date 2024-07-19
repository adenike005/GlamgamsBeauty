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



import React from 'react';
import '../Style/Register.css';

function Register() {
  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="form-wrap"></div>
          <div className="carousel"></div>
        </div>
      </div>
    </main>
  );
}

export default Register;
