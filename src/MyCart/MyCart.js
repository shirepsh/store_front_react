import React, {useEffect, useContext} from 'react'
import { CartContext } from '../Contexts/CartContext'
import { center } from '../OtherComponents/mainStyle'
import OneProduct from './OneProduct'

const MyCart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const mycart = JSON.parse(localStorage.getItem("products"))
    if (mycart){
      setCart(mycart)
    }
  }, [])
   
  return (
    <div>
    <div className="cartProducts" style={center}> <h5> My Products:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "50px" }}>
    {cart.map((item, i)=> (<OneProduct key={i} mykey={i} Product={item}></OneProduct>))}
    </div>
</div>
</div>
  )
}

export default MyCart