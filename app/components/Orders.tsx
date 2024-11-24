"use client";
import React from "react";
import { useCart } from "../context/Context";
import data from "../assets/data.json";
import Image from "next/image";

const Orders: React.FC = () => {
  const { cart, removeDessert } = useCart();

  return (
    <div className="">
      {Object.entries(cart).map(([id, quantity]) => {
        // Find the item in the data array
        const item = data.find((item) => item.id === Number(id));

        // Render only if the item exists and the quantity is greater than 0
        if (item && quantity > 0) {
          return (
            <div
              key={id}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
            >
              <div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                </div>
                <div className="flex items-center  gap-4">
                  <span className="text-sm text-orange-900">{quantity}x</span>
                  <span className="text-sm text-gray-700">${item.price}</span>
                  <span className="text-sm text-gray-700">
                    ${quantity * item.price}
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeDessert(Number(id))}
                className="  px-3 py-1 rounded-md text-zinc-900 transition"
              >
                <Image
                  className="border-2 rounded-full p-1 "
                  src="/assets/images/icon-remove-item.svg"
                  alt="Remove"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          );
        }
        return null; // Return null for items with no quantity
      })}
    </div>
  );
};

export default Orders;
