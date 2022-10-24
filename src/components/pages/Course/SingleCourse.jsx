import React from "react";

const SingleCourse = ({ course }) => {
  const { name, img_url, description } = course;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mb-5">
      <figure className="lg:w-1/4">
        <img src={img_url} alt="Album" />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title">{name}</h2>
        <p className="hidden lg:block">{description}</p>
        <p className="lg:hidden">{description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
