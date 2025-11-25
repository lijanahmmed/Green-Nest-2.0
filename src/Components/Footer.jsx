import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto pt-10 pb-2">
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="space-y-3">
          <img
            className="w-20"
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/60312b62882b40000199e818/0x0.png"
            alt=""
          />
          <p>
            GreenNest — a sustainable lifestyle brand promoting <br />{" "}
            eco-friendly living with nature-inspired products and conscious
            choices.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 mt-2">
            <li className="text-gray-700">About</li>
            <li className="text-gray-700">Contact</li>
            <li className="text-gray-700">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Social Media</h4>
          <div className="mt-2 flex gap-2">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaPinterest size={24} />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr />
        <p className="text-center text-gray-700">
          © 2025 GreenNest. All rights reserved.
        </p>
      </div>
    </div>
  );
}
