"use client";

import Loading from "@/Components/Loading";
import { AuthContext } from "@/Context/AuthContext";
import PrivateRoute from "@/Private/PrivateRouter";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ManagePlantsPage() {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/plants/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your plant has been deleted.",
              icon: "success",
            });

            setPlants((prev) => prev.filter((data) => data._id !== id));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <PrivateRoute>
      <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">Manage Plants</h3>
          <p className="text-gray-500">
            Easily organize, monitor, and care for all your plants with
            intuitive tools designed to simplify tracking, growth management,
            and maintenance routines.
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

                  <div className="card-actions flex w-full">
                    <Link
                      href={`/plants/${plant._id}`}
                      className="flex-1 btn bg-gradient-to-r from-green-600 to-green-400 rounded-md text-white"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(plant._id)}
                      className="btn bg-gray-200 flex-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
}
