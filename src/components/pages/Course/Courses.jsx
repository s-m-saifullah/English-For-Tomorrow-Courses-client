import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="w-11/12 md:w-10/12 mx-auto min-h-[90vh]">
      <h2 className="text-3xl text-center">
        This page has {courses.length} courses
      </h2>
      {courses.map((course) => (
        <SingleCourse key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
