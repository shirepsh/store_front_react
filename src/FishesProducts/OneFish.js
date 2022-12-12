import React, {useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import { center } from '../OtherComponents/mainStyle'

const OneFish = (props) => {

  const { cart, setCart } = useContext(CartContext);

  return (
    <>
    <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
      <div className="card-body" style={center}>
      <img src={`/media/${props.fishProducts.img}`} alt=""></img> 
      {/* <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>  */}
        <h5 className="card-title">{props.fishProducts.name}</h5>
        <p className="card-text">{props.fishProducts.Description}</p>
        <p className="card-text">{props.fishProducts.price}</p>
        <button className="btn btn-success" onClick={()=>setCart([...cart,props.fishProducts])}>buy</button>
      </div>
    </div>
  </>
  )
}

export default OneFish