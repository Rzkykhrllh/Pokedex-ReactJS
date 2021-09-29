import React from "react";

import Bulbasaur from "../images/1.png";
import Circle from "../images/circle.png";
import PokemonImageWrapper from "./PokemonImageWrapper";
import Tag from "./Tag";

function Card({ picture, pokeName, tag, idx }) {
  function toTitles(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  function formatId(number) {
    const x = number / 10;
    console.log(x);
    if (number / 10 < 1) {
      return `#00${number}`;
    } else if (number / 10 < 10) {
      return `#0${number}`;
    } else return `#${number}`;
  }

  return (
    <div className="text-white bg-white rounded-xl">
      {/* Image Wrapper */}

      <PokemonImageWrapper tag={toTitles(tag[0].type.name)}>
        <img
          src={picture}
          alt="Pokemon"
          className="relative z-10 mx-auto my-auto max-h-52"
        />
        <img
          src={Circle}
          alt="Pokemon"
          className="absolute z-0 my-auto max-h-52"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <h2 className="absolute text-xl opacity-50 left-5">{formatId(idx)}</h2>
      </PokemonImageWrapper>

      {/* Data Wrapper */}
      <div className="mt-2 mb-3">
        <h3 className="mb-2 text-2xl font-bold " style={{ color: "#202024" }}>
          {toTitles(pokeName)}
        </h3>
        <div id={idx + "tag"} className="flex flex-row justify-center gap-x-3">
          {tag.map((pokeTag, idx) => (
            <Tag pokeTag={toTitles(pokeTag.type.name)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
