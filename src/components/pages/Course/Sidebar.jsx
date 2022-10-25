import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ courses }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
      {courses.map((course) => (
        <Link
          key={course.id}
          className="block bg-primary hover:bg-accent transition-colors duration-200 mb-4 p-3 text-lg text-white hover:text-black rounded-lg"
          to={`/course/${course.id}`}
        >
          {course.name}
        </Link>
      ))}
    </>
  );
};

export default Sidebar;
