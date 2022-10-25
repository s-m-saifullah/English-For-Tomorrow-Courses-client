import React from "react";

const CoverPhoto = ({ backgroundImg, name }) => {
  return (
    <div
      className="hero min-h-[300px]"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text:3xl lg:text-5xl font-bold">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
