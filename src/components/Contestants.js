import React, { useContext, useState } from "react";

import { ValueContext } from "../Context";

import socketIo from "socket.io-client";
const socket = socketIo.connect("http://localhost:8000");

function Contestants() {
  const { data } = useContext(ValueContext);
  const [contestants, setContestants] = useState([]);
  socket.on("me", (data) => {
    setContestants(data);
  });
  return (
    <div className="contestants">
      {contestants.map((contestant, i) => {
        return (
          <div className="contestant" key={i}>
            <img src={data[i].image} alt="contestant" />
            <h3>{data[i].fullname}</h3>
            <p>{data[i].chapter}</p>
            <p>{data[i].sex}</p>
            <h1>{contestant.votes} Votes</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Contestants;
