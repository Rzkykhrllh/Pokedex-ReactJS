import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Bulbasaur from "../images/1.png";
// import Modal from "react-modal";
import Modal from "../components/Modal";

function Home() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const [query, setQuery] = useState(""); // search box query
  const [isOpen, setIsOpen] = useState(false); // modal
  const [pokeData, setPokeData] = useState();

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    // console.log(data.next);
    setLoadMore(data.next);

    const fetchedData = await createPokemonObject(data.results);
    // console.log("ayam", loadMore);
    // console.log(fetchedData);
    // console.log("kenapa 2 kali dah");
    setAllPokemon((currentList) => [...currentList, ...fetchedData]);
  };

  // get pokemon detail data
  const createPokemonObject = (result) => {
    let promiseArray = [];

    result.forEach(async (item, idx) => {
      promiseArray.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`).then(
          (response) => response.json()
        )
      );
    });

    return Promise.all(promiseArray);
  };

  // fetch function
  useEffect(() => {
    // console.log(loadMore);
    getAllPokemon();
  }, [allPokemon]);

  // if pokemon data is ready
  useEffect(() => {
    setIsOpen(true);
  }, [pokeData]);

  // modal toggle function
  const openModal = (pokemonData) => {
    // console.log(pokemonData);
    setPokeData(pokemonData);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  return (
    <section className="relative" id="Pokemon">
      {/* start of navbar */}
      <div className="fixed top-0 z-50 w-full bg-red-500">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search your pokemon"
          className="h-10 p-5 border-0 "
        />
      </div>
      {/* end of navbar */}

      {/* start of modal */}
      {}
      {isOpen && <Modal closeModal={closeModal} pokemonData={pokeData} />}
      {/* end of modal */}

      {/* start of pokemon card container */}
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 px-10 pt-5 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {allPokemon
          .filter((pokeMon) => {
            if (query === "") {
              return pokeMon;
            } else if (
              pokeMon.name.toLowerCase().includes(query.toLocaleLowerCase())
            ) {
              return pokeMon;
            }
          })

          .map((pokeMon, idx) => (
            <Card
              key={idx}
              picture={pokeMon.sprites.other["official-artwork"].front_default}
              pokeName={pokeMon.name}
              tag={pokeMon.types}
              idx={pokeMon.id}
              openModal={openModal}
              pokemon={pokeMon}
            />
          ))}
      </div>
      {/* end of pokemon card container*/}
    </section>
  );
}

export default Home;
