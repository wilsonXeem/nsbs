import React, { useContext, useState } from "react";
import data from "./data";
import { useParams } from "react-router-dom";

import { ValueContext } from "../Context";

function Vote() {
  const { voteValue } = useContext(ValueContext);
  const { code } = useParams();
  const [id, setid] = useState(0);

  const handleCheck = (e) => {
    const _id = e.target.id;
    setid(_id);
  };

  const handleSubmit = () => {
    const fullname = data[id].fullname;

    fetch("https://southern-fragrant-maize.glitch.me/vote/voting", {
      method: "POST",
      body: JSON.stringify({
        code: code,
        value: voteValue,
        fullname: fullname,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        window.location.replace("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <p>Select the candidate you want to vote then submit</p>
        <h4>Vote value: {voteValue}</h4>
        <p># Your code is valid only once and cannot be retrieved!</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="but" onClick={handleSubmit}>
          Vote
        </button>
      </div>
      <div className="contestants">
        {data.map((data, i) => {
          return (
            <div className="contestant" key={i}>
              <img src={data.image} alt="contestant" />
              <h3>{data.fullname}</h3>
              <p>{data.chapter}</p>
              <p>{data.sex}</p>
              <input
                type="radio"
                className="radio"
                name="vote"
                id={i}
                onChange={handleCheck}
              />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="but" onClick={handleSubmit}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default Vote;
