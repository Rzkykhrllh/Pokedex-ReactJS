import React from "react";
import Home from "../parts/Home";
import bg from "../images/bg-grid.png";

function Pokedex() {
  return (
    <div
      className="bg-center bg-top"
      // style={{ backgroundImage: bg }}
      style={{ backgroundImage: "url('/bg-grid.png')" }}
    >
      <Home />
      {/* <TestingFetch /> */}
    </div>
  );
}

export default Pokedex;
