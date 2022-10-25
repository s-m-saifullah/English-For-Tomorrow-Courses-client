import React, { useContext } from "react";
import { CourseContext } from "./CourseDetails";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const CoverPhoto = ({ backgroundImg, name }) => {
  const { ref } = useContext(CourseContext);
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [15, 19],
  };
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
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
