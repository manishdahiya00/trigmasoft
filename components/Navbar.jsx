"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav
        className="flex  shadow-xl  items-center justify-between p-6 lg:px-8 text-2xl font-bold"
        aria-label="Global"
      >
        <div className="flex text-white lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            T R I G M A S O F T
          </Link>
        </div>
        <div className="flex  lg:hidden justify-end">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleNav}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-xl font-semibold leading-6 text-white">
            HOME
          </Link>
          <Link
            href="/#about"
            className="text-xl font-semibold leading-6 text-white scroll-smooth"
          >
            ABOUT US
          </Link>
          <Link
            href="/#services"
            className="text-xl font-semibold leading-6 text-white"
          >
            SERVICES
          </Link>
          <Link
            href="/#team"
            className="text-xl font-semibold leading-6 text-white"
          >
            TEAM
          </Link>
          <Link
            href="/blog"
            className="text-xl font-semibold leading-6 text-white scroll-smooth"
          >
            BLOGS
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#contact"
            className="text-xl font-semibold leading-6 text-white"
          >
            CONTACT US <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div
        className={` ${nav ? "block" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full bg-gray-900 overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-white ">
              T R I G M A S O F T
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={handleNav}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button onClick={() => setNav(false)}>
                  <Link
                    href="/#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    HOME
                  </Link>
                </button>
                <br />
                <button onClick={() => setNav(false)}>
                  <Link
                    href="/#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    ABOUT US
                  </Link>
                </button>
                <br />
                <button onClick={() => setNav(false)}>
                  <Link
                    href="/#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    SERVICES
                  </Link>
                </button>
                <br />
                <button onClick={() => setNav(false)}>
                  <Link
                    href="/#team"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    TEAM
                  </Link>
                </button>
                <br />
                <button onClick={() => setNav(false)}>
                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                  >
                    BLOGS
                  </Link>
                </button>
                <br />
              </div>
              <hr color="white" />
              <div className="py-6">
                <Link
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-0"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
