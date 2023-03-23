import React, { useContext, useState } from "react";

// import { ValueContext } from "../Context";

// import socketIo from "socket.io-client";
// const socket = socketIo.connect("https://southern-fragrant-maize.glitch.me");

import data from "./data";

function Contestants() {
  // const { data } = useContext(ValueContext);
  // const [contestants, setContestants] = useState([]);
  // socket.on("me", (data) => {
  //   setContestants(data);
  // });
  return (
    <div className="contestants">
      {data.map((data, i) => {
        return (
          <div className="contestant" key={i}>
            <img src={data.image} alt="contestant" />
            <h3>{data.fullname}</h3>
            <p>{data.chapter}</p>
            <p>{data.sex}</p>
            <h1>{data.votes} %</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Contestants;
