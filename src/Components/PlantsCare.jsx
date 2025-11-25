export default function PlantsCare() {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Plant Care Tips</h3>
        <p className="text-gray-500">
          Essential tips to keep your indoor plants healthy, thriving, and
          beautiful.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 p-3">
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://www.gardenia.net/wp-content/uploads/2020/01/shutterstock_653738242.jpg"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Snake Plant</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>
                Water every 2-3 weeks, allowing soil to dry out between
                waterings.
              </li>
              <li>Thrives in low to bright indirect light.</li>
              <li>
                Feed once a month during growing season with balanced houseplant
                fertilizer.
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWSplvkYNyLfDzkDMp6U2kRYJDhALmT72QQ&s"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Monstera Deliciosa</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>Water when the top 2 inches of soil are dry.</li>
              <li>Bright indirect light is ideal.</li>
              <li>
                Feed monthly with a balanced houseplant fertilizer during
                growing season.
              </li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57RMhNi8XiSVeGTqtXVJB-giWAd5Yg2Ixcg&s"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Peace Lily</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>Keep soil consistently moist but not soggy.</li>
              <li>Low to medium indirect light works best.</li>
              <li>Feed every 6-8 weeks with a balanced liquid fertilizer.</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBXeR9_v0wpzBOrCv8MkodZ6woo53aVnllg&s"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Spider Plant</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>
                Water moderately, allowing soil to dry slightly between
                waterings.
              </li>
              <li>Indirect sunlight is best; tolerates low light.</li>
              <li>Feed every 4-6 weeks with a liquid houseplant fertilizer.</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://gardenerspath.com/wp-content/uploads/2021/01/Aloe-Vera-Plants-Growing-in-the-Garden.jpg"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Aloe Vera</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>
                Water deeply but infrequently; let soil dry completely between
                waterings.
              </li>
              <li>Prefers bright, indirect sunlight.</li>
              <li>Use succulent fertilizer once every 2-3 months.</li>
            </ul>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm p-3 hover:scale-105">
          <figure>
            <img
              className="w-full h-56 object-cover"
              src="https://gardenerspath.com/wp-content/uploads/2021/01/Fiddle-Leaf-Figs-in-Small-Containers.jpg"
              alt=""
            />
          </figure>
          <div className="space-y-3 mt-3">
            <h2 className="card-title">Fiddle Leaf Fig</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-500">
              <li>Water when the top inch of soil feels dry.</li>
              <li>Bright indirect sunlight, avoid direct harsh sun.</li>
              <li>
                Feed monthly with a high-nitrogen fertilizer in spring and
                summer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
