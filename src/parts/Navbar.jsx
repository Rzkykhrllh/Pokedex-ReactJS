import React from "react";
import logo from "../images/pokedex.png";
import search from "../images/search.svg";

function Navbar({ setQuery }) {
  return (
    <div
      className="fixed top-0 z-50 flex w-full bg-red-500 "
      style={{ height: "60px" }}
    >
      <div className="flex justify-between w-full max-w-screen-xl px-10 mx-auto my-auto align-middle ">
        <img src={logo} alt="pokedex" className="hidden h-10 sm:block" />

        <div className="flex">
          <div className="flex w-10 h-10 bg-yellow-400 rounded-l-md">
            <img src={search} alt="search" className="mx-auto my-auto" />
          </div>

          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search your pokemon"
            className="h-10 p-5 border-0 rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
