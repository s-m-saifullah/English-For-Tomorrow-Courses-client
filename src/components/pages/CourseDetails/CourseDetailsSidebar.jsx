import React, { useContext } from "react";
import { CourseContext } from "./CourseDetails";

const CourseDetailsSidebar = () => {
  const { courseDetails } = useContext(CourseContext);
  const {
    price,
    lessons,
    duration,
    quizzes,
    level,
    video_url,
    materials_included,
  } = courseDetails;

  return (
    <div className="md:w-1/4">
      <div className="shadow-md mb-5 rounded-md">
        <iframe
          className="w-full aspect-video rounded-md"
          src={video_url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="p-7">
          <p className="font-bold text-3xl">BDT. {price}</p>
          <p className="border-b border-dashed border-warning py-4">
            <span className="font-bold">Course level:</span> {level}
          </p>
          <p className="border-b border-dashed border-warning py-4">
            <span className="font-bold">Lesson:</span> {lessons}
          </p>
          <p className="border-b border-dashed border-warning py-4">
            <span className="font-bold">Duration:</span> {duration}
          </p>
          <p className="border-b border-dashed border-warning py-4">
            <span className="font-bold">Quizzes:</span> {quizzes}
          </p>
        </div>
      </div>

      <div className="shadow-md p-7 rounded-md">
        <h3 className="font-bold text-xl mb-4">Materials Included</h3>
        <ul className="list-disc">
          {materials_included.map((material, index) => (
            <li key={index} className="ml-4">
              {material}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsSidebar;
