// import Image from "next/image";
import Cart from "./components/Cart";
import Desserts from "./components/Desserts";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto px-1">
        {/* Header */}
        <h1 className="py-8 font-extrabold text-4xl sm:text-5xl text-center text-gray-800 transition-transform duration-500 hover:scale-105">
          🍰 Desserts Paradise 🍪
        </h1>
        <div className=" md:flex justify-between ">

          <Desserts />
          <Cart />

        </div>
      </div>
    </div>
  );
}
