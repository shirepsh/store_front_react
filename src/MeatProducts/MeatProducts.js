import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { center } from '../OtherComponents/mainStyle'
import OneMeat from './OneMeat'

const MeatProducts = () => {

  const [meatProducts, setMeatProducts] = useState([])

useEffect(() => {
  const loadData = async () => {
      const res = await axios.get('https://store-management-5esp.onrender.com/Meat_products/')
      setMeatProducts(res.data)
  }
  loadData()
}, []) 

return (
  <div>
    <div className="MeatProducts" style={center}> <h5> Meat Products:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "50px" }}>
    {meatProducts.map((item, i)=> (<OneMeat key={i} mykey={i} meatProduct={item}></OneMeat>))}
    </div>
</div>
</div>
)
}

export default MeatProducts