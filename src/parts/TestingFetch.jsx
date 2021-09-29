import React, { useState, useEffect } from "react";
import Card from "../components/Card";

function TestingFetch() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (result) => {
      result.map(async (item, idx) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item.name}`
        );

        const data = await res.json();

        setAllPokemon((currentList) => [...currentList, data]);
      });
    };

    createPokemonObject(data.results);
    await console.log("all pokemon", allPokemon);

    console.log(data);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="bg-red-400">
      {allPokemon.map((pokeMon, idx) => (
        <>
          <Card
            // picture={${`pokeMon.sprites.other.official-artwork.front_default`}}
            picture=""
            pokeName={pokeMon.name}
            tag={pokeMon.types}
            idx={pokeMon.id}
          />
        </>
      ))}
    </div>
  );
}

export default TestingFetch;
