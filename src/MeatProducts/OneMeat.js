import React from "react";
import { center } from "../OtherComponents/mainStyle";

const OneMeat = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
        <div className="card-body" style={center}>
        <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>
          <h5 className="card-title">{props.meatProduct.name}</h5>
          <p className="card-text">{props.meatProduct.Description}</p>
          <p className="card-text">{props.meatProduct.price}</p>
          <button className="btn btn-success">buy</button>
        </div>
      </div>
    </>
  );
};

export default OneMeat;
