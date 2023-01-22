import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetch = useCallback(async (uid) => {
    setUserLoading(true);
    try {
      const { data } = await axios.put(
        "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/update-user",
        {
          uid: uid,
          loggedin: true,
        }
      );

      const { password, ...rest } = data.user;
      setCurrentUser({ ...rest });
      setLoggedin(true);
      setUserLoading(false);
      return true;
    } catch (err) {
      setUserLoading(false);
    }
  }, []);
  useEffect(() => {
    const cUserId = localStorage.getItem("uid");
    const cleacup = async () => {
      if (cUserId) {
        await fetch(cUserId);
      }
    };

    return () => cleacup();
  }, []);
  const signupUser = async (data) => {
    const res = await axios.post(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/signup",
      data
    );
    console.log(res.data);

    if (res.data.success) {
      setLoggedin(true);
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("uid", res.data.user._id);
      const success = await fetch(res.data.user._id);
      if (success) {
        return true;
      }
    } else {
      console.log(res.data.error);
      toast.error(res.data.error, { duration: 1500 });
    }
  };

  const addUser = async (data) => {
    const res = await axios.post(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/signup",
      data
    );
    console.log(res.data);
  };

  const signinUser = async (email, password) => {
    const { data } = await axios.post(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/login",
      {
        email,
        password,
      }
    );
    if (data.success) {
      localStorage.setItem("accessToken", data.token);
      localStorage.setItem("uid", data.user._id);
      const success = await fetch(data.user._id);
      if (success) {
        return true;
      }
    } else {
      console.log(data.error);

      toast.error(data.error, { duration: 1500 });
    }
  };

  const signoutUser = async (uid) => {
    setUserLoading(true);
    const { data } = await axios.post(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/signout",
      {
        uid,
      }
    );

    console.log(data);
    if (data.success) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("uid");
      setCurrentUser({});
      setLoggedin(false);
      return true;
    }
    setUserLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        signupUser,
        signinUser,
        loggedin,
        signoutUser,
        currentUser,
        userLoading,
        addUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
