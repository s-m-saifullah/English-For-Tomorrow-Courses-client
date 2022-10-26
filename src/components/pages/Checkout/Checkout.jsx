import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div className="min-h-[65vh] flex justify-center items-center">
      <div className="card w-11/12 md:w-4/12 lg:w-1/4 h-56 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            <span>Course Name:</span> <span>{courseDetails.name}</span>
          </h2>
          <h2 className="card-title flex justify-between mb-10">
            <span>Price:</span> <span>BDT. {courseDetails.price}</span>
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
