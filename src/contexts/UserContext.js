import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [userLoading, setUserLoading] = useState(true);
  const [loggedin, setLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetch = useCallback(async (uid) => {
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
  const cUserId = localStorage.getItem("uid");
  useEffect(() => {
    if (cUserId) {
      fetch(cUserId);
    } else {
      setUserLoading(false);
    }
  }, [cUserId]);
  const signupUser = async (data) => {
    setUserLoading(true);
    const res = await axios.post(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/user/signup",
      data
    );

    if (res.data.success) {
      setLoggedin(true);
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("uid", res.data.user._id);
      const success = await fetch(res.data.user._id);
      if (success) {
        setUserLoading(false);
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
    setUserLoading(true);
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
        setUserLoading(false);
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
      console.log("signing out");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("uid");
      localStorage.removeItem("cartItems");
      setCurrentUser({});
      setLoggedin(false);
      return true;
    }
    setUserLoading(false);
  };
  useEffect(() => {
    console.log(userLoading);
  }, [userLoading]);

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
