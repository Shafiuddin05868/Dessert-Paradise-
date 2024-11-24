import React from "react";
import AddToCart from "./AddToCart";

// Define the type for the image object
type DessertImage = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

// Define the type for the Dessert props
type DessertProps = {
  id: number;
  image: DessertImage;
  category: string;
  name: string;
  price: number;
  itemIndex: number; // Used for tracking the index in the array when mapping over the data.json file. This is not used in the current implementation.
};

function Dessert({ id, image, category, name, price, itemIndex }: DessertProps) {
  console.log(id);
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <picture className="w-full h-full rounded-lg block">
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <img
            className="rounded-lg object-cover w-full h-48 sm:h-64 lg:h-72"
            src={image.mobile}
            alt={name}
          />
        </picture>

        {/* Add to Cart Button */}
        <AddToCart id={id} itemIndex={itemIndex} />
      </div>

      {/* Dessert Info */}
      <div className="text-center mt-8">
        <h2 className="text-sm text-gray-600 font-semibold uppercase tracking-wide">
          {category}
        </h2>
        <h1 className="text-xl font-bold text-gray-800 my-2">{name}</h1>
        <h2 className="text-lg text-gray-700 font-medium">$ {price.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Dessert;
