import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Bulbasaur from "../images/1.png";

function Home() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const [query, setQuery] = useState("");

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    // console.log(data.next);
    await setLoadMore(data.next);

    const fetchedData = await createPokemonObject(data.results);
    // console.log("ayam", loadMore);
    // console.log(fetchedData);
    setAllPokemon((currentList) => [...currentList, ...fetchedData]);
  };

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

  useEffect(() => {
    getAllPokemon();
  }, []);

  useEffect(() => {
    console.log(loadMore);
    getAllPokemon();
  }, [allPokemon]);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <section className="relative">
      <div className="fixed z-50 w-full bg-red-500">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search your pokemon"
          className="h-10 p-5 border-0 "
        />
      </div>
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
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
