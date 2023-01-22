import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { ProductContext } from "../../../contexts/ProductsContext";
import DropZone from "../../../Shared/DropZone/DropZone";
import Spinner from "../../../Shared/Spinner/Spinner";

const AddProduct = () => {
  const { categories } = useContext(ProductContext);
  const [thumbnail, setThumbnail] = useState(null);

  const [additionalImage1, setAdditionalImage1] = useState(null);
  const [additionalImage2, setAdditionalImage2] = useState(null);
  const [additionalImage3, setAdditionalImage3] = useState(null);
  const [additionalImage4, setAdditionalImage4] = useState(null);
  const [additionalImage5, setAdditionalImage5] = useState(null);
  const [additionalImage6, setAdditionalImage6] = useState(null);
  const [adding, setAdding] = useState(false);
  const [fileError, setFileError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const createUserImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=e6e425086757be46a714cf930fe529d6`,
      formData
    );
    return res.data.data.display_url;
  };
  const onSubmit = async (data) => {
    if (!thumbnail) {
      setFileError("Thumbnail must be added");
      return;
    }
    setAdding(true);
    const addItionalImagesNull = [
      additionalImage1,
      additionalImage2,
      additionalImage3,
      additionalImage4,
      additionalImage5,
      additionalImage6,
    ];

    const imageFiles = addItionalImagesNull.filter((file) => file);
    const images = [];
    const tn = await createUserImage(thumbnail);
    if (imageFiles.length) {
      for (let imF of imageFiles) {
        const image = await createUserImage(imF);
        images.push(image);
      }
    }
    try {
      const { data: resData } = await axios.post(
        "http://localhost:5000/products/add",
        {
          data: { ...data, thumbnail: tn, images },
        }
      );

      if (resData.success) {
        toast.success("Product added success fully");
        setAdding(false);
        reset();
        setAdditionalImage1(null);
        setAdditionalImage2(null);
        setAdditionalImage3(null);
        setAdditionalImage4(null);
        setAdditionalImage5(null);
        setAdditionalImage6(null);
        setThumbnail(null);
      }
    } catch (err) {}

    console.log(data, tn, images);
  };
  return (
    <div className="w-full text-primary max-w-[100vw] px-5 sm:px-10">
      <h2 className="text-center text-3xl font-semibold mt-8 mb-5">
        Add a product
      </h2>
      <div className="hero min-h-[80vh] bg-tertiary-light">
        <div className="hero-content flex flex-col  items-center   w-full sm:items-start xl:items-center relative ">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-tertiary-dark py-5 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Title"
                  className="input input-bordered"
                  {...register("title", { required: "This field is required" })}
                />
                {errors.title && (
                  <span className="text-red-500 mt-3">
                    {errors?.title.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">
                    Short Description
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write a title description in few words"
                  className="textarea"
                  {...register("description", {
                    required: "This field is required",
                  })}
                />
                {errors.description && (
                  <span className="text-red-500 mt-3">
                    {errors?.description.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">Brand</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  {...register("brand", {
                    required: "This field is required",
                  })}
                />
                {errors.brand && (
                  <span className="text-red-500 mt-3">
                    {errors?.brand.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary-dark">
                      Catagory
                    </span>
                  </label>
                  {/* <input type="text" placeholder="Brand Name" /> */}
                  <select
                    className="select select-bordered w-full "
                    {...register("category", {
                      required: "select one option",
                    })}
                  >
                    {categories.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <span className="text-red-500 mt-3">
                      {errors?.category.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary-dark">
                      Price in $
                    </span>
                  </label>
                  <input
                    type="number"
                    step={"0.01"}
                    placeholder="Price in dollar"
                    className="input input-bordered"
                    {...register("price", {
                      required: "This field is required",
                    })}
                  />
                  {errors.price && (
                    <span className="text-red-500 mt-3">
                      {errors?.price.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary-dark">
                      Discount in %
                    </span>
                  </label>
                  <input
                    type="number"
                    step={"0.01"}
                    placeholder="Discount in percentage"
                    className="input input-bordered"
                    {...register("discountPercentage", {
                      max: {
                        value: 100,
                        message: "percentage cannot me more than 100",
                      },
                    })}
                  />
                  {errors.discountPercentage && (
                    <span className="text-red-500 mt-3">
                      {errors?.discountPercentage.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary-dark">
                      Items In Stock
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Discount in percentage"
                    className="input input-bordered"
                    {...register("stock", {
                      required: "This field is required",
                    })}
                  />
                  {errors.stock && (
                    <span className="text-red-500 mt-3">
                      {errors?.stock.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-primary-dark">
                    Full Description
                  </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write detail description about product here"
                  className="textarea min-h-[12rem]"
                  {...register("fullDescription")}
                />
                {errors.fullDescription && (
                  <span className="text-red-500 mt-3">
                    {errors?.fullDescription.message}
                  </span>
                )}
              </div>
              <label className="label">
                <span className="label-text text-primary-dark">Thumbnail</span>
              </label>
              <DropZone file={thumbnail} setFile={setThumbnail} size={"full"} />
              {fileError && (
                <span className="text-red-500 mt-3">{fileError}</span>
              )}
              <label className="label">
                <span className="label-text text-primary-dark">
                  Additional Images
                </span>
              </label>
              <div className="flex justify-evenly 2xl:gap-x-52">
                <DropZone
                  file={additionalImage1}
                  setFile={setAdditionalImage1}
                  size={52}
                />
                <DropZone
                  file={additionalImage2}
                  setFile={setAdditionalImage2}
                  size={52}
                />
                <DropZone
                  file={additionalImage3}
                  setFile={setAdditionalImage3}
                  size={52}
                />
              </div>
              <div className="flex justify-evenly 2xl:gap-x-52">
                <DropZone
                  file={additionalImage4}
                  setFile={setAdditionalImage4}
                  size={52}
                />
                <DropZone
                  file={additionalImage5}
                  setFile={setAdditionalImage5}
                  size={52}
                />
                <DropZone
                  file={additionalImage6}
                  setFile={setAdditionalImage6}
                  size={52}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={adding}
                  type="submit"
                  className="btn bg-primary-dark border-primary-dark relative text-base-100 disabled:bg-gray-500 inline-flex justify-center items-center"
                >
                  {adding ? (
                    <MoonLoader
                      color={"#081C15"}
                      loading={true}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      speedMultiplier={1}
                    />
                  ) : (
                    "Add Product"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
