import React from "react";

import bianca from "./foto/bianca.jpg";

import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1>Oiê Biancaaa</h1>
      <img width="100px" src={bianca} className="bianca" />
    </div>
  );
}

export default Home;
