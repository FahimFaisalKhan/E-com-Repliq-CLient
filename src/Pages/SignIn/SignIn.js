import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
import { UserContext } from "../../contexts/UserContext";
import Spinner from "../../Shared/Spinner/Spinner";

const SignIn = () => {
  const { signinUser, loggedin } = useContext(UserContext);
  const { getCartItems } = useContext(ProductContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const { email, password } = data;

    const success = await signinUser(email, password);
    if (success) {
      console.log("succeeddeeed");

      navigate("/", { replace: true });
    }
    console.log(loggedin);
  };
  return (
    <div className="w-full text-primary">
      <div className="hero min-h-[80vh] bg-tertiary-light">
        <div className="hero-content flex flex-col  items-center   w-full sm:items-start xl:items-center relative ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-tertiary-dark py-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 mt-3">
                    {errors?.email.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 mt-3">
                    {errors?.password.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary relative text-base-100"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="sm:absolute top-10 right-5 flex flex-col min-w-[20%] justify-center h-[30%] pl-2 pr-5  sm:px-5 border-4 rounded-2xl border-secondary-light text-primary-dark">
            <p className=" text-xl font-bold border-b-2 border-tertiary">
              Try the following credentials:
            </p>
            <p className="inline-flex mr-5 sm:mr-0 justify-between font-semibold text-lg ">
              For Admin
            </p>
            <p className="inline-flex mr-5 sm:mr-0 justify-between font-semibold ">
              <span>Email:</span>{" "}
              <span className="w-8/4 justify-self-start">
                admin.admin@email.com
              </span>
            </p>
            <p className="inline-flex mr-5 sm:mr-0 justify-between font-semibold">
              <span>Password:</span>
              <span className="w-6/4 justify-self-start">789778</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
