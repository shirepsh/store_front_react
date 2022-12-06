import React, {useEffect, useState} from 'react'
import axios from 'axios'
import OneMilk from './OneMilk'
import { center } from '../OtherComponents/mainStyle'

const MilkProducts = () =>  { 
  const [MilkProducts, setMilkProducts] = useState([])

// useEffect(() => {
//   localStorage.setItem('products', JSON.stringify(MilkProducts));
// }, [MilkProducts]);

useEffect(() => {
  const loadData = async () => {
      const res = await axios.get('https://store-management-5esp.onrender.com/Milk_products/')
      setMilkProducts(res.data)
  }
  loadData()
}, []) 

return (
  <div>
    <div style={center}> <h5> Milk Products:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div class="row row-cols-1 row-cols-md-4 g-4" style={{padding:"50px"}}>
    {MilkProducts.map((item, i)=><OneMilk key={i} mykey={i} milkProduct={item}></OneMilk>)}
    </div>
  </div>
  </div>
  
)
}


export default MilkProducts