import React, { createContext, createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import CoverPhoto from "./CoverPhoto";

export const CourseContext = createContext();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const ref = createRef();

  const {
    id,
    name,
    img_wide_url,
    description,
    backgroundImg,
    level,
    topic_covered,
  } = courseDetails;

  const dlInfo = {
    ref,
    courseDetails,
  };

  return (
    <CourseContext.Provider value={dlInfo}>
      {/* Cover Image */}
      <CoverPhoto backgroundImg={backgroundImg} name={name} />

      {/* Course Details */}
      <div
        ref={ref}
        className="w-11/12 md:w-10/12 mx-auto md:flex md:gap-6 my-20"
      >
        <div className="md:w-3/4 p-5 md:p-7 lg:p-10 shadow-lg rounded-md mb-10">
          <img className="w-full rounded-xl" src={img_wide_url} alt="" />
          <div className="badge badge-primary px-4 py-4 my-5">{level}</div>
          <h3 className="mt-7 mb-4 text-3xl font-semibold">About The Course</h3>
          <p className="mb-7">{description}</p>
          <h3 className="mb-4 text-3xl font-semibold">What You Will Learn</h3>
          <ul className="list-disc ml-4">
            {topic_covered.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Link to={`/checkout/${id}`} className="btn btn-primary my-4">
            Get Premium Access
          </Link>
        </div>

        <CourseDetailsSidebar />
      </div>
    </CourseContext.Provider>
  );
};

export default CourseDetails;
