"use client";

import Loading from "@/Components/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PlantsPage() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const searchInput = search.trim().toLowerCase();
  const searchPlants = searchInput
    ? plants.filter((p) => p.title.toLowerCase().includes(searchInput))
    : plants;

  useEffect(() => {
    fetch("https://green-nest-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Our All Plants</h3>
        <p className="text-gray-500">
          Explore our complete collection of vibrant, healthy plants perfect for
          every home and space.
        </p>
      </div>

      <div className="mt-10 flex justify-end">
        <label className="input w-50 md:w-80 ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
        {searchPlants.map((plant) => (
          <div key={plant._id}>
            <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
              <figure>
                <img
                  className="w-full h-56 object-cover"
                  src={plant.image}
                  alt="plant"
                />
              </figure>
              <div className="space-y-3 mt-3">
                <h2 className="card-title">{plant.plantName}</h2>
                <div className="flex justify-between">
                  <p className="py-2 px-4 bg-blue-100 rounded-3xl">
                    <span className="text-md font-bold">Price: </span>
                    {plant.price} ৳
                  </p>
                  <p className="font-bold btn bg-yellow-100 rounded-3xl">
                    ⭐ {plant.rating}
                  </p>
                </div>
                <div className="card-actions">
                  <Link
                    href={`/plants/${plant._id}`}
                    className="btn w-full bg-green-500 rounded-lg text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
