import React, { createRef } from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import CoverPhoto from "./CoverPhoto";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const ref = createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [15, 19],
  };
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
      <CoverPhoto backgroundImg={backgroundImg} name={name} />
      <ReactToPdf
        targetRef={ref}
        options={options}
        scale={1}
        x={0.5}
        y={0.5}
        filename={`${name} details.pdf`}
      >
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="btn btn-success text-center w-full"
          >
            <FaDownload className="mr-2" /> Download Course Details
          </button>
        )}
      </ReactToPdf>

      {/* Course Details */}
      <div
        ref={ref}
        className="w-11/12 md:w-10/12 mx-auto md:flex md:gap-6 my-20"
      >
        <div className="md:w-3/4 p-5 md:p-7 lg:p-10">
          <img className="w-full" src={img_wide_url} alt="" />
          <div className="badge badge-primary px-4 py-4 my-5">{level}</div>
          <h3 className="mt-7 mb-4 text-3xl font-semibold">About The Course</h3>
          <p className="mb-7">{description}</p>
          <h3 className="mb-4 text-3xl font-semibold">What You Will Learn</h3>
          <ul className="list-disc ml-4">
            {topic_covered.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        <CourseDetailsSidebar img_url={img_url} />
      </div>
    </div>
  );
};

export default CourseDetails;
