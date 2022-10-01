import React, { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Formx from './Pages/Formx';
import Display from './Pages/Display';
import Navbar from './Components/Navbar';
enum country {
  India = 'India',
  Usa = 'Usa',
  Unitedkingdom = 'Unitedkingdom',
  Russia = 'Russia',
  China = 'China',
  Egypt = 'Egypt',
  Italy = 'Italy',
  Denmark = 'Denmark',
  Sweden = 'Sweden',
}
export interface Person {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  country: country;
  phone: number;
}
export const AppContext: any = createContext({})
function App() {



  const [data, setData] = useState<Person>()
  return (
    <div className="App">
      <AppContext.Provider value={{ data, setData, country }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formx" element={<Formx />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </AppContext.Provider >
    </div>
  );
}

export default App;
