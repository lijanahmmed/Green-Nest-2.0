"use client";

import Loading from "@/Components/Loading";
import { AuthContext } from "@/Context/AuthContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function MyProfilePage() {
  const { user, setUser, updateProfileFunc, loading } = useContext(AuthContext);
  const [input, setInput] = useState(false);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleInputUpdateProfile = () => {
    setInput(true);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const updateData = {};

    if (name && name !== user.displayName) {
      updateData.displayName = name;
    }
    if (photo && photo !== user.photoURL) {
      updateData.photoURL = photo;
    }
    if (Object.keys(updateData).length === 0) {
      toast.info("No changes your profile!");
      setInput(false);
      return;
    }

    updateProfileFunc({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log(user);
        setUser({ ...user, ...updateData });
        toast.success("Your Profile is updated successfully!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setInput(false);
  };

  return (
    <div className="mt-15 mx-auto bg-gray-100 p-10 w-fit">
      <h2 className="text-center text-xl font-bold mb-8">My Profile</h2>
      <div className="flex items-center gap-10">
        <div>
          <img
            className="w-44 h-44 object-cover rounded-full"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg font-bold">Name</p>
          <p>{user.displayName}</p>
          <p className="text-lg font-bold mt-3">Email</p>
          <p>{user.email}</p>
          {input ? (
            ""
          ) : (
            <button
              onClick={handleInputUpdateProfile}
              className="btn bg-gradient-to-r from-green-600 to-green-400 text-white mt-3"
            >
              Update Profile
            </button>
          )}
        </div>
      </div>

      {input ? (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
          <div className="card-body">
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                <label className="label text-black text-sm">Name</label>
                <input
                  name="name"
                  type="name"
                  className="input"
                  placeholder="Your Name"
                />
                <label className="label text-black text-sm">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                />
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-green-600 to-green-400 text-white mt-4"
                >
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
