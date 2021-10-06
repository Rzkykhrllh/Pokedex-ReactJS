import ProgressBar from "./ProgressBar";
import React from "react";

function ModalStats({ pokemonData }) {
  return (
    <div id="modalStats">
      <h3 className="mb-6 text-sm font-bold text-gray-400">Statistic</h3>
      <div className="">
        {pokemonData.stats.map((item, idx) => (
          <div className="grid grid-cols-7 mb-3">
            <p className="col-span-2 font-bold text-right text-gray-400">
              {item.stat.name}
            </p>
            <p className="">{item.base_stat}</p>
            <div className="flex col-span-4 pr-4">
              <ProgressBar done={(item.base_stat / 200) * 100} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full "></div>
    </div>
  );
}

export default ModalStats;
