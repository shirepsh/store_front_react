import React, { useEffect, useState } from "react";
import OneFish from "./OneFish";
import { center } from "../OtherComponents/mainStyle";
import axios from "axios";

function Fishes() {
  const [fishProducts, setfishProducts] = useState([])
 
useEffect(() => {
  const loadData = async () => {
      const res = await axios.get('https://store-management-5esp.onrender.com/Fishes/')
      setfishProducts(res.data)
  }
  loadData()
}, []) 

  return (
    <div>
    <div className="fisheProducts" style={center}> <h5> fishes and their Products:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "50px" }}>
    {fishProducts.map((item, i)=> (<OneFish key={i} mykey={i} fishProducts={item}></OneFish>))}
    </div>
</div>
</div>
  )
}

export default Fishes