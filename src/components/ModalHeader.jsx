import React from "react";
import Tag from "./Tag";

import topUpperCase from "../utils/toUpperCase";

function ModalHeader({ pokemonData }) {
  return (
    <div id="header">
      <img
        src={pokemonData.sprites.other["official-artwork"].front_default}
        alt="pokemon"
        className="mx-auto w-60"
      />

      <div className="mt-4">
        <h3 className="mb-2 text-2xl font-bold " style={{ color: "#202024" }}>
          {topUpperCase(pokemonData.name)}
        </h3>
        <div id={"tag"} className="flex flex-row justify-center gap-x-3">
          {pokemonData.types.map((pokeTag, idx) => (
            <Tag pokeTag={topUpperCase(pokeTag.type.name)} key={idx} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 text-sm gap-x-6">
        <div className="flex" id="height">
          <p className="font-bold text-gray-400">Height :</p>
          <p className="ml-5 font-semibold">{pokemonData.height}m</p>
        </div>

        <div style={{ width: "1px" }} className="bg-gray-400" />

        <div className="flex" id="weight">
          <p className="font-bold text-gray-400">Weight :</p>
          <p className="ml-5 font-semibold">{pokemonData.weight} kg</p>
        </div>

        <div style={{ width: "1px" }} className="bg-gray-400" />

        <div className="flex" id="base-xp">
          <p className="font-bold text-gray-400">Base Exp :</p>
          <p className="ml-5 font-semibold">{pokemonData.base_experience}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
