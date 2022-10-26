import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div className="card w-11/12 md:w-4/12 lg:w-1/4 bg-base-100 shadow-xl mx-auto my-10">
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          <span>Course Name:</span> <span>{courseDetails.name}</span>
        </h2>
        <h2 className="card-title flex justify-between mb-4">
          <span>Price:</span> <span>BDT. {courseDetails.price}</span>
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
