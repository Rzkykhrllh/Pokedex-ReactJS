import React from "react";
import Card from "../components/Card";
import Bulbasaur from "../images/1.png";

function Home() {
  return (
    <section className="px-10 x">
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, idx) => (
          <Card
            image={item.picture}
            pokeName={item.pokeName}
            tag={item.tag}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;

const data = [
  {
    pokeName: "Bulbasaur",
    picture: "../images/1.png",
    tag: ["Grass", "Poison"],
  },
  {
    pokeName: "Bulbasaur",
    picture: Bulbasaur,
    tag: ["Grass", "Poison"],
  },
  {
    pokeName: "Bulbasaur",
    picture: Bulbasaur,
    tag: ["Grass", "Poison"],
  },
  {
    pokeName: "Bulbasaur",
    picture: Bulbasaur,
    tag: ["Grass", "Poison"],
  },
];
