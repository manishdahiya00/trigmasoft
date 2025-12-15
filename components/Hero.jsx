import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-gray-900 text-white" id="home">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-xl leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Experience A New Degree Of Innovation
            </div>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wider leading-loose text-gray-200 sm:text-8xl lg:text-7xl">
              The Ultimate Mobile App & Web Solutions For Every Business.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Accelerate your business growth with our Smart Ideas, Insight
              driven and Innovative solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                CONTACT US
              </Link>
              <Link
                href="/#about"
                className="text-xl font-semibold leading-6 text-white"
              >
                KNOW MORE <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
