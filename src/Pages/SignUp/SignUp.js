import React from "react";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full ">
      <div className="hero min-h-[80vh] bg-tertiary-light">
        <div className="hero-content flex flex-col  items-center   w-full sm:items-start xl:items-center relative ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-tertiary-dark py-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("name", { required: "This field is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 mt-3">
                    {errors?.name.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email address"
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
                  <span className="label-text text-primary-dark">Phone</span>
                </label>
                <div className="flex">
                  <select className="select  max-w-xs bg-primary rounded-r-none w-[24%] pr-0 label-text ">
                    <option>+88</option>
                  </select>
                  <input
                    type="text"
                    placeholder="01871461409"
                    className="input input-bordered  rounded-l-none w-[70%]"
                    {...register("phone", {
                      required: "This field is required",
                    })}
                  />
                </div>

                {errors.phone && (
                  <span className="text-red-500 mt-3">
                    {errors?.phone.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
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
                  className="btn bg-primary-dark relative text-base-100"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
