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
        Quest for the crown of Mr/Miss face of NSBS 2022/2023 <br /> brought to you by
        Comr. Malaky Arinze NSBS D.O.S.
      </h1>
      <div className="queen">
        <img src={queen} alt="" />
        <h1>Miss Jenifer</h1>
        <h3>Miss Face of NSBS 2021/2022</h3>
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
