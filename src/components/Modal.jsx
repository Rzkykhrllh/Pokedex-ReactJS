import React from "react";
import ProgressBar from "./ProgressBar";

function Modal({ closeModal, pokemonData }) {
  console.log(pokemonData);
  return (
    <div className="fixed z-20 flex w-screen h-screen bg-black bg-opacity-50">
      <div className="mx-auto my-auto bg-white rounded-xl h-96 w-96 ">
        <button onClick={closeModal}>x</button>
        {/* <h1>{pokemonData.name}</h1> */}
        <div className="w-full bg-green-300">
          <ProgressBar done={100} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
