import React from "react";
import { useNavigate } from "react-router-dom";
import Contestants from "./Contestants";
import banner from "../images/nsbs banner.jpeg";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1 style={{ textAlign: "center" }}>
        Quest for the crown of Mr/Miss face of NSBS 2023/2024 <br /> brought to
        you by Comr. Ofoegbu Divinefavour NSBS D.O.S.
      </h1>
      <div className="queen">
        <img src={banner} alt="" />
      </div>
      <hr />
      // <p>
      //   Click <button onClick={() => navigate("/login")}>HERE</button> to log in
      //   and vote
      // </p>
      <Contestants />
    </div>
  );
}

export default Homepage;
