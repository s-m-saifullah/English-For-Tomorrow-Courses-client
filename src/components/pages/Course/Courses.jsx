import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="md:flex gap-6 w-11/12 md:w-10/12 mx-auto min-h-[90vh] mt-7">
      <div className="md:w-1/4 bg-info rounded-md p-5 mb-5 md:mb-0">
        <Sidebar courses={courses} />
      </div>
      <div className="md:w-3/4">
        {courses.map((course) => (
          <SingleCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
