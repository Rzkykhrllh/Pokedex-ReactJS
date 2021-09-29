import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Bulbasaur from "../images/1.png";

function Home() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?limit=20"
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    console.log(data);

    const fetchedData = await createPokemonObject(data.results);
    console.log("ayam");
    console.log(fetchedData);
    setAllPokemon((currentList) => [...currentList, ...ayam]);
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

  //   panggil lagi kalau loadmore keganti
  // useEffect(() => {
  //   getAllPokemon();
  // }, [loadMore]);

  return (
    <section className="px-10 x">
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {allPokemon.map((pokeMon, idx) => (
          <Card
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
