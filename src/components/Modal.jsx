import React from "react";
import ModalHeader from "./ModalHeader";
import ModalStats from "./ModalStats";

function Modal({ closeModal, pokemonData }) {
  return (
    <div className="fixed z-50 flex w-screen bg-black bg-opacity-50 ">
      <div
        className="px-6 py-6 mx-auto my-auto bg-white rounded-xl w-96 "
        style={{ height: "750px", width: "610px" }}
      >
        <button onClick={closeModal}>x</button>
        <ModalHeader pokemonData={pokemonData} />
        <div style={{ height: "1px" }} className="w-full my-5 bg-gray-400" />

        <ModalStats pokemonData={pokemonData} />
      </div>
    </div>
  );
}

export default Modal;
