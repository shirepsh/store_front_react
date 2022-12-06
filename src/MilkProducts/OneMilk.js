import React  from "react";
// import MyCart from "../MyCart/MyCart";
import { center } from "../OtherComponents/mainStyle";
// import MilkProducts from './MilkProducts'

const OneMilk = (props) => {

    
  return (
    <>
      <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
        <div className="card-body" style={center}>
        <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>
          <h5 className="card-title">{props.milkProduct.name}</h5>
          <p className="card-text">{props.milkProduct.Description}</p>
          <p className="card-text">{props.milkProduct.price}</p>
          <button className="btn btn-success">buy</button>
          {/* <button className="btn btn-success" onClick={Buy}>buy</button>  */}
        </div>
      </div>
    </>
  );
};

export default OneMilk;
