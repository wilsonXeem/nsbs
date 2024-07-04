import React, { useState } from "react";

function Code() {
  const [votes, setvotes] = useState("");
  const [code, setcode] = useState("");
  const handleSubmit = () => {
    fetch("https://nsbs-server.vercel.app/vote/register", {
      method: "POST",
      body: JSON.stringify({
        value: votes,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setcode(json.voted.code);
        setvotes("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="code">
      <h1>Code: {code}</h1>
      <p>Input number of votes to generate</p>
      <input
        type="number"
        value={votes}
        name="votes"
        id="votes"
        onChange={(e) => setvotes(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
    </div>
  );
}

export default Code;
