import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';
import Footer from './pages/Shared/Footer/Footer';
import HomePage from './pages/HomePage';
import PhotoGallery from './pages/ImageGallery';
import MyProjects from './pages/MyProjects';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-photo" element={<PhotoGallery />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
