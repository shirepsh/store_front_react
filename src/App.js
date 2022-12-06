import React  from 'react'
import Navbar from './OtherComponents/Navbar'
import Footer from './OtherComponents/Footer';
import { Outlet } from 'react-router-dom';
// import HomePage from './OtherComponents/HomePage'
// import {Link} from "react-router-dom";

const App = () => { 
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/> 
    </div>
  )};

export default App;
