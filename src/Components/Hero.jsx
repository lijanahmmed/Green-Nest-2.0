import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative bg-green-100">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/009/644/390/non_2x/banner-natural-green-leaves-and-plants-on-white-background-vector.jpg')",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Grow Your Plants Effortlessly
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-xl">
          Discover tips, tools, and plants for your perfect home garden.
        </p>
        <Link
          href="/plants"
          className="bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
