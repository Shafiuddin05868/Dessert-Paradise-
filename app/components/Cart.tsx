"use client"
import React, { useState } from "react";
import Orders from "./Orders";
import Image from "next/image";
import { useCart } from "../context/Context";
import OrderConfirmation from "./OrderConfirmation";
function Cart() {
  const { cart, totalAmount } = useCart();
  function count(number: object): number {
    let total = 0;

    Object.entries(number).forEach(([id, quantity]) => {
      if (quantity != 0) {
        total += 1;
      }
    });

    return total;
  }

  const cartNumber: number | null = count(cart);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  return (
    <div className=" w-full md:w-96 md:ml-8 p-4 md:h-3/5 bg-white shadow-lg rounded-t-lg sm:rounded-lg transition-all duration-300 overflow-y-auto">
      {/* Cart Header */}
      <h1 className="text-2xl text-orange-700 font-extrabold mb-4">
        Your Cart <span>({cartNumber})</span>
      </h1>

      {/* Empty Cart Section */}
      {cartNumber === 0 ? (
        <div className="text-center">
          <div className="relative w-full h-40 sm:h-48 md:h-60 mx-auto">
            <Image
              src="/assets/images/illustration-empty-cart.svg"
              alt="Empty Cart"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="mt-4 text-gray-600 text-sm md:text-base">
            Your added items will appear here.
          </h3>
        </div>
      ) : (
        /* Orders Section */
        <div>
          <Orders />
          <div className="flex items-center justify-between p-4">
            <h3 className="font-semibold opacity-80 text-md">Order Total</h3>
            <h3 className="font-semibold text-2xl">$ {totalAmount}</h3>
          </div>
          <div className="flex text-sm items-center gap-2 py-6"><Image
            className=""
            src="/assets/images/icon-carbon-neutral.svg"
            alt="carbon-neutral"
            width={30} // Set appropriate width
            height={30} // Set appropriate height
          /><p className="opacity-80">This is a <strong>carbon-neutral</strong> delivery</p></div>
          {Object.keys(cart).length > 0 && (
            <button
              onClick={() => setIsOrderConfirmed(true)}
              className="w-full px-4 py-2 text-white font-semibold rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300"
            >
              Confirm Order
            </button>
          )}
          {/* Order Confirmation Modal */}
          {isOrderConfirmed && (
            <OrderConfirmation onClose={() => setIsOrderConfirmed(false)} />
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
