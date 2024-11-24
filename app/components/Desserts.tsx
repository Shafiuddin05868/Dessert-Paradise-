import React from "react";
import data from "../assets/data.json";
import Dessert from "./Dessert";

function Desserts() {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between gap-6 container mx-auto ">
      {data.map((item, index: number) => (
        <div
          key={index}
          className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-grow sm:flex-grow-0 sm:w-[48%] md:w-[30%]"
        >
          <Dessert {...item} itemIndex={index} />
        </div>
      ))}
    </div>
  );
}

export default Desserts;
