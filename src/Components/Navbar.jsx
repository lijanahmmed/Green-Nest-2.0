"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const loading = false;
  const user = false;

  const activeClass = (path) =>
    pathname === path ? "text-green-600 font-bold underline" : "";

  return (
    <div className="navbar w-11/12 md:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className={activeClass("/")} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={activeClass("/plants")} href="/plants">
                Plants
              </Link>
            </li>
            <li>
              <Link className={activeClass("/about")} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={activeClass("/my-profile")} href="/my-profile">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        <Link className="btn btn-ghost text-xl" href="/">
          <img
            className="w-20"
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/60312b62882b40000199e818/0x0.png"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={activeClass("/")} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={activeClass("/plants")} href="/plants">
              Plants
            </Link>
          </li>
          <li>
            <Link className={activeClass("/about")} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={activeClass("/my-profile")} href="/my-profile">
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1 cursor-pointer">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm space-y-3"
            >
              <li>Add Plant</li>
              <li>Manage Plants</li>
              <li>
                <button type="button" className="btn bg-green-600 text-white">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn bg-green-600 text-white" href="/login">
              Login
            </Link>
            <Link className="btn bg-green-600 text-white" href="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
