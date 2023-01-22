import React from "react";

import { Link } from "react-router-dom";
import ProductRating from "../ProductRating/ProductRating";
import { BsCartPlus } from "react-icons/bs";
import { Button } from "react-daisyui";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductsContext";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    rating,
    brand,
    thumbnail,

    stock,
    _id,
  } = product;
  const { addToCart } = useContext(ProductContext);
  return (
    <div className="text-primary  h-[30rem] border-2 p-3 border-secondary flex flex-col hover:scale-[1.01] transition-all">
      <div className="h-[37%] max-h-[37%] flex justify-center bg-primary-dark">
        <img className="" src={thumbnail} alt="" />
      </div>

      <h2 className="my-2 text-xl font-semibold text-primary min-h-[25%] border-b-2 border-tertiary flex flex-col justify-between pt-5">
        <p className="">{title}</p>
        <div className="w-5/12 mb-2">
          <p className="text-xs mt-.5 text-center border-2 border-tertiary-dark py-1 px-2 rounded-3xl">
            {brand}
          </p>
        </div>
      </h2>
      <h3 className=" grow ">
        {description.split(" ").length > 10
          ? description.split(" ").splice(0, 10).join(" ") + "..."
          : description}
      </h3>
      {/* <p className="text-justify">
        {fullDescription.split(" ").splice(0, 20).join(" ")}
      </p> */}
      <ProductRating rating={rating} />
      <div className="flex justify-between mb-4">
        <p className="text-xl mt-1">${price}</p>
        <Link>
          <button
            className="z-50"
            onClick={() =>
              addToCart({
                title,
                image: thumbnail,
                stock,
                productId: _id,
                price,
                totalPrice: price,
              })
            }
          >
            <BsCartPlus size={22} />
          </button>
        </Link>
      </div>
      <Link>
        <Button
          color="secondary"
          className="capitalize"
          fullWidth={true}
          size={"sm"}
        >
          Buy
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
