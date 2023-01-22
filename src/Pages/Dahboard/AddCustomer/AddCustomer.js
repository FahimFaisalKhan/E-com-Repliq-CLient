import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/UserContext";

const AddCustomer = () => {
  const { addUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await addUser(data);
  };
  return (
    <div className="w-full text-primary  sm:px-10">
      <h2 className="text-center text-3xl font-semibold mt-8 mb-5">
        Add a customer
      </h2>
      <div className="hero min-h-[80vh] bg-tertiary-light ">
        <div className="hero-content flex flex-col  items-center   w-full sm:items-start xl:items-center relative ">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-tertiary-dark py-5  rounded-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">
                    Customer name
                  </span>
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
                  <span className="label-text text-primary-dark">
                    Customer Email
                  </span>
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
                  <span className="label-text text-primary-dark">
                    Customer phone
                  </span>
                </label>
                <div className="flex w-full">
                  <select className="select  max-w-xs bg-primary rounded-r-none w-[7%] pr-0 label-text ">
                    <option defaultValue={"+88"}>+88</option>
                  </select>
                  <input
                    type="text"
                    placeholder="01871461409"
                    className="input input-bordered  rounded-l-none grow"
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
                  <span className="label-text text-primary-dark">
                    Customer password
                  </span>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">
                    Customer role
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Role"
                  className="input input-bordered lowercase"
                  {...register("role")}
                />
                {errors.role && (
                  <span className="text-red-500 mt-3">
                    {errors?.role.message}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-primary-dark border-primary-dark relative text-base-100"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
