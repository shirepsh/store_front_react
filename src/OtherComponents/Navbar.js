import React from 'react'
import './App.css'
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
        <ul>
        <li><Link to="/HomePage">Home</Link></li>
        <li><Link to="/Categories">Categories</Link></li> 
        <li><Link to="/ContactUs">Contact us</Link></li>
        <li><Link to="/About">About</Link></li>
        <li style={{backgroundColor:"green", float:"right"}}><Link to="/MyCart"> My Cart</Link></li>
        </ul>
    </>
  )
}


export default Navbar;