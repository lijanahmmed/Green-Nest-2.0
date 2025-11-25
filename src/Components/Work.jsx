export default function Work() {
  return (
    <div className="mt-15 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">How We Work</h3>
        <p className="text-gray-500">
          From selecting the perfect plants to delivering them to your doorstep,
          we make plant care simple and enjoyable.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">Free shipping</h2>
          <p className="text-gray-500">
            Enjoy free shipping on all orders! We deliver your plants safely and
            swiftly right to your doorstep, so you can bring home greenery
            without any extra cost.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">24/7 Support</h2>
          <p className="text-gray-500">
            Our dedicated support team is available 24/7 to answer your
            questions, provide guidance. Whether it’s care tips, delivery
            updates or expert advice.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-7 shadow-xl">
          <h2 className="text-lg font-bold mb-2">100% Money Back</h2>
          <p className="text-gray-500">
            We stand by the quality of our plants and services. If you are not
            completely satisfied with your purchase, we offer a 100% money-back
            guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
