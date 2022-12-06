import React, {useEffect, useState} from 'react'
import { center } from '../OtherComponents/mainStyle'
import OneProduct from './OneProduct'

const MyCart = () => {

    const [myCart , setMyCart] = useState([])

// useEffect(() => {
//     const loadData = () => {
//         let res = localStorage.getItem("products")
//         // if (res == null){res = []}
//         setMyCart([res.data])
//     }
//     loadData()
//     }, []) 

  return (
    <div>
    <div style={center}> <h5> My Products:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div class="row row-cols-1 row-cols-md-4 g-4" style={{padding:"50px"}}>
    {myCart.map((item, i)=><OneProduct key={i} mykey={i} Product={item}></OneProduct>)}
    </div>
  </div>
  </div>
  )
}

export default MyCart