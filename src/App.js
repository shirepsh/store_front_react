import React, { useState , useEffect}  from 'react'
import Navbar from './OtherComponents/Navbar'
import Footer from './OtherComponents/Footer';
import { Outlet } from 'react-router-dom';
import { CartContext } from './Contexts/CartContext';

const App = () => { 

  const [cart, setCart] = useState([])

  useEffect(() => {
    if(cart.length>0){
    localStorage.setItem("products", JSON.stringify(cart))}
  }, [cart])
  
  return (
    <CartContext.Provider value={{cart, setCart}}>
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/> 
    </div>
    </CartContext.Provider>
  )};

export default App;
