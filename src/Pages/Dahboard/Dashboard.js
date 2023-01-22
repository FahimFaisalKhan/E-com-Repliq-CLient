import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto my-14 text-primary-dark px-5 sm:px-10">
      <h1 className="text-3xl  border-b-2 border-tertiary-dark">
        Welcome Admin
      </h1>
      <p className="mt-5 text-lg ">
        <p className="font-semibold mb-2">
          Here you can perform actions to maintain and monitor your website.
          Analyse the customer flow and demands.
        </p>
        <ul>
          <li> - You have authorization to add or remove user/customer</li>
          <li>
            - Add or remove products , check detail information of any customer.
          </li>
          <li>- You can find all available options on the left hand side.</li>
        </ul>
      </p>
    </div>
  );
};

export default Dashboard;
