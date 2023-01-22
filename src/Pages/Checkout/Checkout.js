import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";

import Spinner from "../../Shared/Spinner/Spinner";

const Checkout = () => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  const { id } = useParams();

  const { cartItems, products } = useContext(ProductContext);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [chkLoading, setChkLoading] = useState(true);

  useEffect(() => {
    const itemExistsinCart = cartItems?.find((i) => i.productId === id);

    if (itemExistsinCart) {
      setCheckoutProduct(itemExistsinCart);
      setChkLoading(false);
    } else {
      console.log(products);
      const prod = products.find((p) => p._id === id);
      setCheckoutProduct(prod);
      setChkLoading(false);
    }
  }, [cartItems, id, products]);
  if (chkLoading) {
    return <Spinner />;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start  items-start w-full space-y-9">
          <div className="flex flex-col justify-between  items-start space-y-2 w-full">
            <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
              <svg
                className="fill-stroke"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none">Back</p>
            </button>
            <div className="flex flex-col lg:flex-row  justify-between items-center w-full  space-y-4">
              <p className="text-xl md:text-3xl font-bold leading-normal text-primary-dark">
                {checkoutProduct.title}
              </p>
              <div className="2xl:mr-96">
                <p className="text-xl font-semibold leading-none text-gray-600">
                  Number of items:{" "}
                  {checkoutProduct.quantity ? checkoutProduct.quantity : 1}
                </p>
                <p className="text-xl md:text-2xl leading-normal text-primary-dark">
                  Total price: $
                  {checkoutProduct?.totalPrice
                    ? checkoutProduct?.totalPrice
                    : checkoutProduct?.price}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-tertiary-dark py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img
                  src={
                    checkoutProduct.image
                      ? checkoutProduct.image
                      : checkoutProduct.thumbnail
                  }
                  alt="headphones"
                />
              </div>
            </div>

            <div className="p-8 bg-tertiary-dark flex flex-col lg:w-full xl:w-3/5">
              <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  or pay with card
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8 flex justify-center">
                <input
                  className="border border-gray-300 p-4 rounded w-full max-w-[100vw] text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base flex justify-center lg:justify-start  text-primary-dark">
                <p className="max-w-[100vw]">Card details</p>
              </label>
              <div className="mt-2 flex-col">
                <div className="flex justify-center">
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full max-w-[100vw] text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex-row flex justify-center">
                  <input
                    className="border rounded-bl max-w-[50vw] border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="MM/YY"
                  />
                  <input
                    className="border rounded-br max-w-[50vw] border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 flex justify-center lg:justify-start text-primary-dark">
                <p>Name on card</p>
              </label>
              <div className="mt-2 flex-col">
                <div className="flex justify-center">
                  <input
                    className="border rounded max-w-[100vw] border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Name on card"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-primary-dark flex justify-center lg:justify-start">
                <p>Country or region</p>
              </label>
              <div className="mt-2 flex-col">
                <div className="relative flex justify-center">
                  <button
                    className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white max-w-[100vw]"
                    type="email"
                  >
                    {country}
                  </button>
                  <svg
                    onClick={() => setMenu(!menu)}
                    className={
                      "transform  cursor-pointer absolute top-4 right-20 sm:right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 sm:justify-start flex-col text-gray-600 max-w-[100vw] justify-center " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className="cursor-pointer  hover:bg-gray-800 hover:text-white px-4 py-2"
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <input
                    className="max-w-[100vw] border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="ZIP"
                  />
                </div>
              </div>

              <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                  <p className="text-base leading-4">
                    Pay ${" "}
                    {checkoutProduct?.totalPrice
                      ? checkoutProduct?.totalPrice
                      : checkoutProduct?.price}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
