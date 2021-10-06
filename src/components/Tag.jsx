import React from "react";

import "./component.css";

function Tag({ pokeTag }) {
  return (
    <div>
      <div
        className={
          (pokeTag === "Bug"
            ? "bg-bug"
            : pokeTag === "Dark"
            ? "bg-dark"
            : pokeTag === "Dragon"
            ? "bg-dragon"
            : pokeTag === "Electric"
            ? "bg-electric"
            : pokeTag === "Fairy"
            ? "bg-fairy"
            : pokeTag === "Fighting"
            ? "bg-fighting"
            : pokeTag === "Normal"
            ? "bg-normal"
            : pokeTag === "Poison"
            ? "bg-poison"
            : pokeTag === "Psychic"
            ? "bg-Psychic"
            : pokeTag === "Fire"
            ? "bg-fire"
            : pokeTag === "Flying"
            ? "bg-flying"
            : pokeTag === "Ghost"
            ? "bg-ghost"
            : pokeTag === "Grass"
            ? "bg-grass"
            : pokeTag === "Ground"
            ? "bg-ground"
            : pokeTag === "Ice"
            ? "bg-ice"
            : pokeTag === "Rock"
            ? "bg-rock"
            : pokeTag === "Steel"
            ? "bg-steel"
            : pokeTag === "Water"
            ? "bg-water"
            : "") + ` px-2 font-medium  rounded-md text-white`
        }
      >
        {pokeTag}
      </div>
    </div>
  );
}

export default Tag;
