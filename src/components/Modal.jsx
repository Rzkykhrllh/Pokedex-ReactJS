import React from "react";
import ModalHeader from "./ModalHeader";
import ProgressBar from "./ProgressBar";

function Modal({ closeModal, pokemonData }) {
  console.log(pokemonData);
  return (
    <div className="fixed z-50 flex w-screen h-full bg-black bg-opacity-50 ">
      <div
        className="px-6 py-6 mx-auto my-auto bg-white rounded-xl w-96 "
        style={{ height: "750px", width: "610px" }}
      >
        <button onClick={closeModal}>x</button>
        <ModalHeader pokemonData={pokemonData} />
        <div style={{ height: "1px" }} className="w-full my-5 bg-gray-400" />

        <div id="modalStats">
          <h3 className="text-sm font-bold text-gray-400">Statistic</h3>
        </div>

        {/* <div className="w-full bg-green-300">
          <ProgressBar done={100} />
        </div> */}
      </div>
    </div>
  );
}

export default Modal;
