export default function GreenExperts() {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Meet Our Green Experts</h3>
        <p className="text-gray-500">
          Learn from our experienced plant experts dedicated to helping your
          greens grow healthier and happier.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 p-3">
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://img.freepik.com/free-photo/medium-shot-man-painting-watercolors_23-2150170379.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Ethan Bloom</h2>
            <p className="text-gray-500">
              Expert in succulents, drought-tolerant plants, and minimalist
              plant setups that thrive with minimal watering and maintenance.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://img.freepik.com/free-photo/portrait-happy-woman-holding-succulent-plant-sitting-table-kitchen_482257-8673.jpg?semt=ais_incoming&w=740&q=80"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Lara Greenfield</h2>
            <p className="text-gray-500">
              Specialized in nurturing indoor plants, improving air quality, and
              creating sustainable green spaces with easy-care houseplants.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://media.istockphoto.com/id/1219919204/photo/flower-gardening-during-isolation-period.jpg?s=612x612&w=0&k=20&c=Mecfkc0HGYwZVPgv0GZy739eRnT1haupAYAd68omCHs="
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Maya Fern</h2>
            <p className="text-gray-500">
              Specializes in tropical, decorative houseplants and interior plant
              styling, bringing natural beauty and freshness to modern homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
