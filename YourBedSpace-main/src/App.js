import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BedSpaces from './pages/BedSpaces';
import CreateBedSpace from './pages/CreateBedSpace';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import "./App.css"

const App = () => (
  <div className={`min-h-screen bg-cover bg-center bg-fixed relative before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:z-[-1]`}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bedspaces" element={<BedSpaces />} />
        <Route path="/create-bedspace" element={<CreateBedSpace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  </div>
);

export default App;