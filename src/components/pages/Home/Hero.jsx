import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero.png";

const Hero = () => {
  return (
    <section className="min-h-[75vh] bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-32 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Take
            <span className="text-violet-400"> Grammar </span> Seriously
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            One stop space for academic English.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/courses"
              className="px-8 py-3 text-lg font-semibold rounded bg-accent text-gray-900"
            >
              Courses
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={hero}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
