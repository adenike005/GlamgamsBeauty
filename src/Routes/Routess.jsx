import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from '../Paging/Register';
import Login from '../Paging/Login';
import Home from '../Paging/Home';

const Routess = () => {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
};

export default Routess;
