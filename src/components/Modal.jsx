import React from "react";
import ModalHeader from "./ModalHeader";
import ModalStats from "./ModalStats";
import { BiArrowBack } from "react-icons/bi";

function Modal({ closeModal, pokemonData }) {
  return (
    <div className="fixed z-50 flex w-screen min-h-screen bg-black bg-opacity-50 ">
      <div
        className="relative px-6 py-6 mx-auto my-auto bg-white rounded-xl w-96"
        style={{ width: "610px" }}
      >
        <button onClick={closeModal} className="absolute text-gray-400 left-4">
          <BiArrowBack size={36} />
        </button>
        <ModalHeader pokemonData={pokemonData} />
        <div style={{ height: "1px" }} className="w-full my-5 bg-gray-400" />

        <ModalStats pokemonData={pokemonData} />
      </div>
    </div>
  );
}

export default Modal;
