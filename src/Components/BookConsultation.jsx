"use client";
import { toast } from "react-toastify";

export default function BookConsultation() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("This plant is booked successfully!!");
    e.target.reset();
  };

  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Book Consultation</h3>
        <p className="text-gray-500">
          Book a consultation to get personalized advice, expert guidance, and
          tailored solutions for your plants' health and growth needs.
        </p>
      </div>
      <div>
        <div className="hero mt-10">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="submit"
                    className="btn bg-green-600 text-white mt-4"
                  >
                    Book Now
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
