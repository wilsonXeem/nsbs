import React, { useContext, useEffect, useState } from "react";

import { ValueContext } from "../Context";

import socketIo from "socket.io-client";
const socket = socketIo.connect("https://nsbs-server.vercel.app/");

function Contestants() {
  const { data } = useContext(ValueContext);
  const [contestants, setContestants] = useState([]);
  const [show, setShow] = useState(false);

  socket.on("me", (data) => {
    setContestants(data);
  });

  useEffect(() => {
    fetch("https://nsbs-server.vercel.app//contestants")
      .then((res) => res.json())
      .then((json) => json);
  }, []);
  return (
    <div className="contestants">
      {data.map((datas, i) => {
        return (
          <div className="contestant" key={i}>
            <img src={datas.image} alt="contestant" />
            <h3>{datas.fullname}</h3>
            <p>{datas.nickname}</p>
            <h1>
              {contestants.length !== 0 ? contestants[i].votes : "0"} votes
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Contestants;
