import React from 'react'
import { center } from '../OtherComponents/mainStyle'

const OneProduct = (props) => {
  // console.log(props.mykey)
  return (
    <>
    <div className="card mb-3" style={{ width: "16rem", margin: "8px" }}>
      <div className="card-body" style={center}>
      <img src={`https://picsum.photos/200/30${props.mykey}`} className="card-img-top" alt="..."></img>
        <h5 className="card-title">{props.Product.name}</h5>
        <p className="card-text">{props.Product.Description}</p>
        <p className="card-text">{props.Product.price}</p> 
        <button className="btn btn-success">remove</button>
      </div>
    </div>
  </>
  )
}

export default OneProduct