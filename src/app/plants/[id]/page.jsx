"use client";

import BookConsultation from "@/Components/BookConsultation";
import Loading from "@/Components/Loading";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const [plant, setPlant] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://green-nest-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        const showDetails = data.find((p) => p._id === id);
        setPlant(showDetails);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img className="w-full h-96 object-cover" src={plant.image} alt="" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{plant.plantName}</h3>
          <p className="text-gray-500">{plant.description}</p>
          <p>
            <span className="font-bold">Price : </span>
            {plant.price}৳
          </p>
          <p>
            <span className="font-bold">Rating : </span>
            {plant.rating} ⭐
          </p>
          <p>
            <span className="font-bold">Available : </span>
            {plant.availableStock} Pcs
          </p>
        </div>
      </div>
      <BookConsultation></BookConsultation>
    </div>
  );
}
