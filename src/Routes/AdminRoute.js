import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Spinner from "../Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { currentUser, userLoading } = useContext(UserContext);

  if (userLoading) {
    return <Spinner />;
  }

  if (!userLoading && currentUser.role === "admin") return children;
  toast("Please login as admin to access dashboard");
  return <Navigate to={"/signin"} />;
};

export default AdminRoute;
