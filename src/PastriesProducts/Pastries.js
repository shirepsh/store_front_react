import React, { useEffect, useState } from "react";
import OnePastrie from "./OnePastrie";
import { center } from "../OtherComponents/mainStyle";
import axios from "axios";

function Pastries() {
  const [pastries, setPastries] = useState([])
 
  useEffect(() => {
    const loadData = async () => {
        const res = await axios.get('https://store-management-5esp.onrender.com/Pastries/')
        setPastries(res.data)
    }
    loadData()
  }, []) 

  return (
    <div>
    <div className="PastriesProducts" style={center}> <h5> Pastries and desserts:</h5> </div>
    <div class="d-flex justify-content-center"> 
    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "50px" }}>
    {pastries.map((item, i)=> (<OnePastrie key={i} mykey={i} Pastrie={item}></OnePastrie>))}
    </div>
</div>
</div>
  )
}

export default Pastries