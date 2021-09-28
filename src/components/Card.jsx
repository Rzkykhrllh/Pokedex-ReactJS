import React from "react";

import Bulbasaur from "../images/1.png";
import Circle from "../images/circle.png";

function Card({ picture, pokeName, tag, idx }) {
  return (
    <div className="text-white bg-blue-300 rounded-xl">
      {/* Image Wrapper */}
      <div className="relative top-0 flex py-3 bg-green-400 rounded-t-xl">
        <img
          src={Bulbasaur}
          alt="Pokemon"
          className="relative z-10 mx-auto my-auto max-h-60"
        />
        <img
          src={Circle}
          alt="Pokemon"
          className="absolute z-0 my-auto max-h-60"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Data Wrapper */}
      <div className="my-3">
        <h3 className="mb-2 text-2xl font-bold ">{pokeName}</h3>
        <div id={idx + "tag"} className="flex flex-row justify-center gap-x-3">
          {tag.map((pokeTag, idx) => (
            <div className="px-2 font-medium bg-green-300 rounded-md">
              {pokeTag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
