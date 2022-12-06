import React, { useEffect, useState } from "react";
import OneCategory from "./OneCategory";
import { center } from "../OtherComponents/mainStyle";
import axios from "axios";

const Categories = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("https://store-management-5esp.onrender.com/Categories/");
      setCategories(res.data);
    };
    loadData();
  }, []);

  return (
    <>
      {/* categories part */}
      <div className="category" style={center}> <h5>choose a category</h5> </div>
      <div class="d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-4 g-4" style={{ padding: "50px" }}>
      {Categories.map((item, i) => (<OneCategory key={i} mykey={i} category={item}></OneCategory>))}
        </div>
      </div>
    </>
  );
};

export default Categories;
