import React from "react";

import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const ProductRating = ({ rating }) => {
  return (
    <div className=" flex gap-x-1">
      {[...Array(5).keys()].map((item, index) =>
        rating <= index ? (
          <ImStarEmpty key={index} size={20} />
        ) : rating <= index + 0.5 ? (
          <ImStarHalf key={index} size={20} />
        ) : (
          <ImStarFull key={index} size={20} />
        )
      )}
    </div>
  );
};

export default ProductRating;
