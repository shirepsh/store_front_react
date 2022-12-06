import React, { useState } from "react";
import { Link } from "react-router-dom";
import { center } from "./mainStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const notify = () => toast("on monday we will open untill 15:00PM");

  const [name, setName] = useState("");
  return (
    <div>
      {/* welcome part */}
      <div class="d-flex justify-content-center">
        {" "}
        <h3>welcome {name}!</h3>
      </div>{" "}
      <br />
      <br />
      <div class="d-flex justify-content-center">
        <h6>
          enter your full name:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>{" "}
        </h6>{" "}
      </div>
      <br />
      <br />
      {/* button */}
      <div class="d-flex justify-content-center">
        <Link to="/Categories">
          <button className="btn btn-primary" style={center}>
            get started!
          </button>
        </Link>
      </div>
      {/* tostify */}
      <div class="d-flex justify-content-center">
        <button onClick={notify}>News</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default HomePage;
