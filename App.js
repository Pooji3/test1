import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/ContactUs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Courses from './Components/Courses';

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/courses" element={Courses}/>
      <Route path ="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;