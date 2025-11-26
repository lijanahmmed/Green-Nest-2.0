"use client";

import { AuthContext } from "@/Context/AuthContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function PlantsPage() {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    if (!user?.email || !user?.accessToken) return; // prevent undefined errors

    fetch(`http://localhost:5000/plants?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Our All Plants</h3>
        <p className="text-gray-500">
          Explore our complete collection of vibrant, healthy plants perfect for
          every home and space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {plants.map((plant) => (
          <div key={plant._id}>
            <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
              <figure>
                <img
                  className="w-full h-56 object-cover"
                  src={plant.image}
                  alt="plant"
                />
              </figure>
              <div className="space-y-1 mt-3">
                <h2 className="card-title">{plant.title}</h2>
                <p className="text-gray-400">{plant.shortDescription}</p>
                <p className="">
                  <span className="text-md font-bold">Price: </span>
                  {plant.price} ৳
                </p>

                <div className="card-actions">
                  <Link
                    href={""}
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
