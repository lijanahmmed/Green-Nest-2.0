"use client";

import PrivateRoute from "@/Private/PrivateRouter";
import { toast } from "react-toastify";

export default function AddPlantPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.photo.value;
    const shortDescription = e.target.shortDescription.value;
    const fullDescription = e.target.fullDescription.value;
    const price = e.target.price.value;

    const plantData = {
      title,
      image,
      shortDescription,
      fullDescription,
      price,
    };

    fetch("http://localhost:5000/plant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Plant is added successfully!!")
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  };
  return (
    <PrivateRoute>
      <div className="card w-11/12 max-w-md mx-auto border border-purple-300 shadow-md shadow-purple-200 rounded-2xl mt-20">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add plant</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-medium text-black">Title</label>
              <input
                type="text"
                name="title"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Title"
              />
            </div>
            <div>
              <label className="label font-medium text-black">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Photo URL"
              />
            </div>

            <div>
              <label className="label font-medium text-black">
                Short description
              </label>
              <textarea
                name="shortDescription"
                required
                rows="3"
                className="textarea w-full rounded-lg focus:border-0 h-[100px]"
                placeholder="Short description"
              ></textarea>
            </div>
            <div>
              <label className="label font-medium text-black">
                Full Description
              </label>
              <textarea
                name="fullDescription"
                required
                rows="3"
                className="textarea w-full rounded-lg focus:border-0 h-[200px]"
                placeholder="Full description"
              ></textarea>
            </div>

            <div>
              <label className="label font-medium text-black">Price</label>
              <input
                type="number"
                name="price"
                required
                className="input w-full rounded-lg focus:border-0"
                placeholder="Price"
              />
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
