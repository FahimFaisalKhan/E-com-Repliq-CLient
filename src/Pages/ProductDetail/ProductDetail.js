import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { Button } from "react-daisyui";
import { toast } from "react-hot-toast";

import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
import { UserContext } from "../../contexts/UserContext";
import ProductRating from "../../Shared/ProductRating/ProductRating";
import Spinner from "../../Shared/Spinner/Spinner";

const ProductDetail = () => {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const { addToCart } = useContext(ProductContext);
  const {
    isLoading: productDetailLoading,
    refetch: productDetailRefetch,
    data: productDetailData,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products/single?id=${id}`
      );
      console.log(data);
      return data;
    },
  });
  const handleAddToCart = async (product) => {
    const { title, thumbnail, stock, _id, price } = product;
    if (currentUser?._id) {
      addToCart({
        title,
        image: thumbnail,
        stock,
        productId: _id,
        price,
        totalPrice: price,
        uid: currentUser?._id,
        loggedin: true,
      });
    } else {
      toast("PLease login to add to cart", { duration: 1000 });
    }
  };

  if (productDetailLoading) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[80vh] flex flex-col my-12 justify-center gap-12 text-primary">
      <div className="w-full text-center text-primary-dark font-bold uppercase text-2xl">
        {productDetailData.title}
      </div>
      <div className="flex container mx-auto  ">
        <div className="w-[50%] flex flex-col gap-y-4 justify-center">
          <div className="flex justify-center">
            <img src={productDetailData.thumbnail} alt="" />
          </div>
          <div className="flex items-center justify-center gap-x-4 ">
            {productDetailData.images.map((img) => (
              <div
                className={`w-[${
                  100 / productDetailData.images.length - 2
                }%] h-[7rem]`}
              >
                <img className="max-h-[100%]" src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] px-4">
          <h3 className="text-lg font-semibold">
            {productDetailData.description}
          </h3>
          <div className="flex justify-between border-b-2 border-tertiary py-2">
            <ProductRating rating={productDetailData.rating} />
            <p className="text-primary-light font-semibold">
              Items in stock:{" "}
              <span className="text-primary-dark">
                {productDetailData.stock}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-y-2 w-8/12 py-2 font-semibold text-primary-dark">
            <div className="flex ">
              <p className="w-1/2">Brand:</p>
              <p className="w-1/2">{productDetailData.brand}</p>
            </div>
            <div className="flex ">
              <p className="w-1/2">Catagory:</p>
              <p className="w-1/2">{productDetailData.category}</p>
            </div>
            <div className="flex ">
              <p className="w-1/2">Rating:</p>
              <p className="w-1/2">{productDetailData.rating}</p>
            </div>
            <div className="flex ">
              <p className="w-1/2">Discount:</p>
              <p className="w-1/2">{productDetailData.discountPercentage}%</p>
            </div>
            <div className="flex ">
              <p className="w-1/2">Price:</p>
              <p className="w-1/2">${productDetailData.price}</p>
            </div>
          </div>
          <div className="flex border-t-2 border-tertiary py-2">
            <p className="text-sm">{productDetailData.fullDescription}</p>
          </div>

          <div className="flex gap-x-8 py-2">
            <Button
              onClick={() => handleAddToCart(productDetailData)}
              size="md "
              color="secondary"
              className="capitalize"
            >
              Add to cart
            </Button>
            <Link to={`/checkout/${productDetailData._id}`}>
              <Button color="primary" className="capitalize">
                Purchase
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
