"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/Context";
import data from "../assets/data.json";

const OrderConfirmation: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { cart, totalAmount, resetCart } = useCart();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <div className="bg-white py-6 px-10 rounded-lg shadow-xl w-full max-w-2xl h-auto max-h-[80%] overflow-y-auto">
                <Image
                    className="py-6"
                    src="/assets/images/icon-order-confirmed.svg"
                    alt="Confirmed"
                    width={50} // Set appropriate width
                    height={50} // Set appropriate height
                />
                <h2 className="text-4xl font-bold mb-4 text-left">Order Confirmed</h2>
                <h1 className="opacity-70 pb-4">We hope you enjoy your food!</h1>
                <div className="space-y-4">
                    {Object.entries(cart).map(([id, quantity]) => {
                        const dessert = data.find((item) => item.id === Number(id));
                        if (!dessert) return null;

                        return (
                            <div
                                key={id}
                                className="flex items-center gap-4 p-4 border-b border-gray-200"
                            >
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={dessert.image.thumbnail}
                                        alt={dessert.name}
                                        className="rounded-lg object-cover"
                                        fill
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{dessert.name}</h3>
                                    <div className="text-gray-600 flex justify-between items-center">
                                        <div className="flex gap-10">
                                            <span className="text-orange-900 font-semibold">{quantity}x</span><span><sub>@</sub>${dessert.price}</span>
                                        </div>
                                        <span className="text-black font-bold">
                                            ${quantity * dessert.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center text-lg font-bold">
                    <span className="opacity-80 text-md">Total Order:</span>
                    <span>${totalAmount}</span>
                </div>
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => {
                            resetCart();
                            onClose();
                        }}
                        className="w-4/5 mx-auto px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300"
                    >
                        Start New Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
