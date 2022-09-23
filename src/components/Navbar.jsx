import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='maindiv'>
      <Link to="/">Home</Link>
      <Link to="user">User</Link>
      <Link to="admin">Admin</Link>
      <Link to="/login">LOGIN</Link>
    </div>
  );
}

export default Navbar