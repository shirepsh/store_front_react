import React from "react";
import { center } from "../OtherComponents/mainStyle";
import { Link } from "react-router-dom";

const OneCategory = (props) => {
  return (
    <div className="card" style={{ width: "16rem", margin: "8px" }}>
      <h5 className="card-title" style={center}>
        {props.category.name}
      </h5>
      <div className="card-body" style={center}>
      <img src={`/media/${props.category.img}`} alt=""></img> 
      {/* <img src={`https://picsum.photos/200/30${props.mykey}`} alt=""></img>  */}
        <p>{props.category.Description}</p> 
         <Link to={props.category.link}> 
          <button className="btn btn-primary" style={center}>go to {props.category.name}</button>
        </Link>
      </div>
    </div>
  );
};

export default OneCategory;
