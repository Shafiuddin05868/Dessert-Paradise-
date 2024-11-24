"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "../context/Context";

type AddToCartProps = {
  id: number;
  itemIndex: number;
};

const AddToCart: React.FC<AddToCartProps> = ({ id }) => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart(); // Access cart and context functions
  const quantity = cart[id] || 0; // Get the current quantity from the cart

  return (
    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4/5">
      {quantity === 0 ? (
        // Initial "Add to Cart" button
        <button
          onClick={() => increaseQuantity(id)} // Add with initial quantity of 1
          className="flex items-center justify-center gap-3 w-full px-4 py-2 bg-white border hover:border-orange-700 text-black font-semibold rounded-full shadow-md hover:text-orange-700 hover:shadow-lg transition-all duration-300"
        >
          <div className="relative w-5 h-5">
            <Image
              src="/assets/images/icon-add-to-cart.svg"
              alt="Add to Cart Icon"
              fill
              className="object-contain"
            />
          </div>
          <span>Add to Cart</span>
        </button>
      ) : (
        // Increment/Decrement buttons when quantity > 0
        <div className="flex items-center justify-around gap-3 w-full px-4 py-2 text-white font-semibold rounded-full shadow-md bg-orange-600  hover:shadow-lg transition-all duration-300">
          <button
            onClick={() => decreaseQuantity(id)} // Decrease quantity
            className="  px-2 py-3 border-2 rounded-full shadow"
          >
            <Image
              className="rounded-full"
              src="/assets/images/icon-decrement-quantity.svg"
              alt="decrement"
              width={10}
              height={15}
            />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => increaseQuantity(id)} // Increase quantity
            className="  px-1 py-1 border-2 rounded-full shadow"
          >
                        <Image
              className="rounded-full"
              src="/assets/images/icon-increment-quantity.svg"
              alt="increment"
              width={15}
              height={15}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
