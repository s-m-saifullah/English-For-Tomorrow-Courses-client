import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  return (
    <div>
      <h3>This is checkout page</h3>
    </div>
  );
};

export default Checkout;
