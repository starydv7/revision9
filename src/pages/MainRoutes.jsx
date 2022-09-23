import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Admin from './Admin'
import Login from './Login'
import User from './User'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default MainRoutes