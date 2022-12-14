import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { id, name, img_url, img_wide_url, description } = course;
  return (
    <div className="card w-full lg:card-side bg-base-100 shadow-xl mb-5">
      <figure className="lg:w-1/4">
        <img className="md:hidden lg:block w-full" src={img_url} alt="Album" />
        <img
          className="hidden md:block lg:hidden"
          src={img_wide_url}
          alt="Album"
        />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title text-3xl">{name}</h2>
        <p className="hidden lg:block">{description.slice(0, 300) + "..."}</p>
        <p className="lg:hidden mb-5">{description.slice(0, 100) + "..."}</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
