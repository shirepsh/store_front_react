import React, {useContext} from 'react'
import { center } from '../OtherComponents/mainStyle'
import { CartContext } from "../Contexts/CartContext";

const OnePastrie = (props) => {

  const { cart, setCart } = useContext(CartContext);

  return (
    <>
    <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
      <div className="card-body" style={center}>
      <img src={`/media/${props.Pastrie.img}`} alt=""></img>
      {/* <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>  */}
        <h5 className="card-title">{props.Pastrie.name}</h5>
        <p className="card-text">{props.Pastrie.Description}</p>
        <p className="card-text">{props.Pastrie.price}</p>
        <button className="btn btn-success" onClick={()=>setCart([...cart,props.Pastrie])}>buy</button>
      </div>
    </div>
  </>
  )
}

export default OnePastrie