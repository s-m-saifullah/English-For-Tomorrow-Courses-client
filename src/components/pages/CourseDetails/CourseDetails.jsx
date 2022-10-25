import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const {
    id,
    name,
    img_url,
    img_wide_url,
    description,
    backgroundImg,
    level,
    topic_covered,
  } = courseDetails;

  console.log(courseDetails);
  return (
    <div>
      {/* Cover Image */}
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
      {/* Course Details */}
      <div className="w-11/12 md:w-10/12 mx-auto md:flex md:gap-6 my-20">
        <div className="md:w-3/4 p-10">
          <img className="w-full" src={img_wide_url} alt="" />
          <div className="badge badge-primary px-4 py-4 my-5">{level}</div>
          <h3 className="my-7 text-3xl font-semibold">About The Course</h3>
          <p>{description}</p>
          <h3 className="my-7 text-3xl font-semibold">What You Will Learn</h3>
          <ul className="list-disc ml-4">
            {topic_covered.map((topic) => (
              <li>{topic}</li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3>sidebar</h3>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
