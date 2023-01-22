import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
const Spinner = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center ">
      <MoonLoader
        color={"#1B4332"}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
};

export default Spinner;
