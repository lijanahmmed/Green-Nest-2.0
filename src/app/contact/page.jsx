export default function ContactPage() {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Contact with us</h3>
        <p className="text-gray-500">
          Our team is ready to assist you with any queries, feedback, or ideas
          to make your green journey even better.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 mx-auto">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="name" className="input" placeholder="Your Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Phone Number</label>
            <input type="number" className="input" placeholder="Phone Number" />
            <label className="label">Message</label>
            <textarea
              className="w-80 h-32 border border-gray-300 p-3"
              name=""
              id=""
              placeholder="Write your message"
            ></textarea>
            <button className="btn bg-green-600 text-white mt-4">
              Message
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
