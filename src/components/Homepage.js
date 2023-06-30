import React from "react";
import { useNavigate } from "react-router-dom";
import Contestants from "./Contestants";
import queen from "../images/queen.jpeg";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Nigerian Society of Biochemistry Students, NSBS</h1>
      <h1>
        Face of NSBS MOUAU Chapter brought to you by Comr. Malaky Arinze NSBS
        D.O.S.
      </h1>
      <div className="queen">
        <h2>FACE OF NSBS MOUAU</h2>
        <img src={queen} alt="" />
        <h1>Jennifer</h1>
      </div>
      <hr />
      <p>
        Click <button onClick={() => navigate("/login")}>HERE</button> to log in
        and vote
      </p>
      <Contestants />
    </div>
  );
}

export default Homepage;
