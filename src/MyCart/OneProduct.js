import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import { center } from '../OtherComponents/mainStyle'

const OneProduct = (props) => {

  const {cart, setCart} = useContext(CartContext)

  return (
    <>
      <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
        <div className="card-body" style={center}>
        <img src={`/media/${props.Product.img}`} alt=""></img>
        {/* <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img> */}
          <h5 className="card-title">{props.Product.name}</h5>
          <p className="card-text">{props.Product.Description}</p>
          <p className="card-text">{props.Product.price}</p> 
          {/* <button className="btn btn-success" onClick={()=>setCart([cart.filter(props.key != )])}>remove</button> */}
        </div>
      </div>
  </>
  )
}

export default OneProduct