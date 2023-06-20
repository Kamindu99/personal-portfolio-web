import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Shared/Navbar/Navbar';
import Footer from './pages/Shared/Footer/Footer';
import HomePage from './pages/HomePage';
import PhotoGallery from './pages/ImageGallery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-photo" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
