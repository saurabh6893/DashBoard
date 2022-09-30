import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Formx from './Pages/Formx';
import Display from './Pages/Display';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formx" element={<Formx />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
