import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Table } from "react-daisyui";
import Spinner from "../../../Shared/Spinner/Spinner";
import "./CustomerList.css";
const CustomerList = () => {
  const {
    isLoading: customaerDetailLoading,
    data: customaerDetail,
    refetch: customerDeailRefetch,
  } = useQuery({
    queryKey: ["user", "detail"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/user/get-all");

      console.log(data);
      return data;
    },
  });
  if (customaerDetailLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto container mx-auto my-12  sm:px-10">
      <table className="table w-full rounded-none bg-secondary">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="bg-secondary rounded-none text-primary-dark font-semibold">
          {customaerDetail.map((d, i) => (
            <tr key={i} className="">
              <th className="rounded-none">{i + 1}</th>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>+88{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
