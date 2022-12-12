import React , {useContext} from "react";
import { center } from "../OtherComponents/mainStyle";
import { CartContext } from "../Contexts/CartContext";

const OneMilk = (props) => {

  const { cart, setCart } = useContext(CartContext);
  
  return (
    <>
      <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
        <div className="card-body" style={center}>
        <img src={`/media/${props.milkProduct.img}`} alt=""></img>
        {/* <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>  */}
          <h5 className="card-title">{props.milkProduct.name}</h5>
          <p className="card-text">{props.milkProduct.Description}</p>
          <p className="card-text">{props.milkProduct.price}</p>
          <button className="btn btn-success" onClick={()=>setCart([...cart,props.milkProduct])}>buy</button> 
        </div>
      </div>
    </>
  );
};

export default OneMilk;
