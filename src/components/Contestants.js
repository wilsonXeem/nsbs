import React, { useContext, useState } from "react";

import { ValueContext } from "../Context";

import socketIo from "socket.io-client";
const socket = socketIo.connect("https://southern-fragrant-maize.glitch.me");

function Contestants() {
  const { data } = useContext(ValueContext);
  const [contestants, setContestants] = useState([]);
  // const [show, setShow] = useState(false);

  
  socket.on("me", (data) => {
    setContestants(data);
  });
  return (
    <div className="contestants">
      {data.map((datas, i) => {
        return (
          <div className="contestant" key={i}>
            <img src={datas.image} alt="contestant" />
            <h3>{datas.fullname}</h3>
            <p>{datas.nickname}</p>
            <h1>
              {datas.votes} %
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Contestants;
