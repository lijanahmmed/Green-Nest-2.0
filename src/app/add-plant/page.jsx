"use client";

import PrivateRoute from "@/Private/PrivateRouter";
import { toast } from "react-toastify";

export default function AddPlantPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const plantName = e.target.name.value;
    const image = e.target.photo.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const availableStock = e.target.stock.value;

    const plantData = {
      plantName,
      image,
      description,
      price,
      rating,
      availableStock,
    };

    fetch("https://green-nest-server.vercel.app/plant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Plant is added successfully!!");
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };
  return (
    <PrivateRoute>
      <div className="card w-11/12 max-w-md mx-auto border border-green-300 shadow-md shadow-green-200 rounded-2xl mt-20">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add plant</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-medium">Plant Name</label>
              <input
                type="text"
                name="name"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Plant Name"
              />
            </div>
            <div>
              <label className="label font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="label font-medium">Price</label>
              <input
                type="number"
                name="price"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Price"
              />
            </div>
            <div>
              <label className="label font-medium">Rating</label>
              <input
                type="number"
                name="rating"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Rating"
              />
            </div>
            <div>
              <label className="label font-medium">Available Stock</label>
              <input
                type="number"
                name="stock"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Available Stock"
              />
            </div>

            <div>
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-lg focus:border-0 h-[200px]"
                placeholder="Description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-green-600 to-green-400"
            >
              Add Plant
            </button>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
}
