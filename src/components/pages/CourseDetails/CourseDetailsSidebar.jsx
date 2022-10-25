import React from "react";

const CourseDetailsSidebar = ({ img_url }) => {
  return (
    <div className="md:w-1/4">
      <iframe
        className="w-full aspect-video rounded-md"
        src="https://www.youtube.com/embed/dnI9XvIvcsM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default CourseDetailsSidebar;
