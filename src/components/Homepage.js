import React from "react";
import { useNavigate } from "react-router-dom";
import Contestants from "./Contestants";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Nigerian Society of Biochemistry Students, NSBS</h1>
      <h1>Face of NSBS South-East</h1>
      <i>
        Click <button onClick={() => navigate("/login")}>HERE</button> to Vote
      </i>
      <Contestants />
    </div>
  );
}

export default Homepage;
