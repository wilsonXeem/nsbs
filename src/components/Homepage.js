import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Contestants from "./Contestants";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h1>Nigerian Society of Biochemistry Students, NSBS</h1>
      <h1>
        Face of NSBS MOUAU Chapter brought to you by Comr. Malaky Arinze NSBS
        D.O.S.
      </h1>
      <p>
        Click{" "}
        <button>
          <Link to="/login">HERE</Link>
        </button>{" "}
        to log in
      </p>
      <Contestants />
    </div>
  );
}

export default Homepage;
