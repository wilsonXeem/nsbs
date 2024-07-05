import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ValueContext } from "../Context";

function Login() {
  const { setValue } = useContext(ValueContext);
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleSubmit = () => {
    fetch("https://southern-fragrant-maize.glitch.me/vote/login", {
      method: "POST",
      body: JSON.stringify({
        code: code,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if ((json.message = "Valid Vote")) {
          setValue(json.vote.type);
          navigate(`/vote/${code}`);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form">
      <h4>Insert Code to Vote</h4>
      <div>
        Code:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <br />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
