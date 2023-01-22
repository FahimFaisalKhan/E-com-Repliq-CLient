import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const fetch = useCallback(async (uid) => {
    setUserLoading(true);
    const { data } = await axios.put("http://localhost:5000/user/update-user", {
      uid: uid,
      loggedin: true,
    });

    console.log(data);
    const { password, ...rest } = data.user;
    setCurrentUser({ ...rest });
    setLoggedin(true);
    setUserLoading(false);
  }, []);
  useEffect(() => {
    const cUserId = localStorage.getItem("uid");
    const cleacup = async () => {
      await fetch(cUserId);
    };

    return () => cleacup();
  }, []);
  const signupUser = async (data) => {
    const res = await axios.post("http://localhost:5000/user/signup", data);
    console.log(res.data);

    if (res.data.success) {
      setLoggedin(true);
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("uid", res.data.user._id);
      await fetch(res.data.user._id);
    } else {
      console.log(res.data.error);
    }
  };

  const signinUser = async (email, password) => {
    const { data } = await axios.post("http://localhost:5000/user/login", {
      email,
      password,
    });
    if (data.success) {
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("uid", data.user._id);
      await fetch(data.user._id);
    } else {
      console.log(data.error);
    }
  };

  const signoutUser = async (uid) => {
    setUserLoading(true);
    const { data } = await axios.post("http://localhost:5000/user/signout", {
      uid,
    });

    console.log(data);
    if (data.success) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("uid");
      setCurrentUser({});
      setLoggedin(false);
      setUserLoading(false);
    }
  };
  useEffect(() => {
    console.log(currentUser, loggedin);
  }, [currentUser, loggedin]);
  return (
    <UserContext.Provider
      value={{
        signupUser,
        signinUser,
        loggedin,
        signoutUser,
        currentUser,
        userLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
