import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
import { UserContext } from "../../contexts/UserContext";
import Spinner from "../Spinner/Spinner";

import "./CatDwawer.css";
const CatDrawer = ({ children, fromDashboard }) => {
  const { productsLoading, catLoading, categories } =
    useContext(ProductContext);
  const { userLoading } = useContext(UserContext);
  if (productsLoading || catLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="drawer drawer-mobile h-auto lg:hidden">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content flex flex-col items-start "
          style={{ overflow: "hidden" }}
        >
          <div className="w-full">{children}</div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay lg:hidden "
          ></label>
          <div className="w-80 max-w-[80vw] h-full ">
            <ul className="menu p-4 h-full  w-80 max-w-[80vw] bg-tertiary text-primary ">
              {fromDashboard && (
                <>
                  <li className="text-start font-semibold">
                    <Link
                      to={"/dashboard"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Dashboard overview
                    </Link>
                  </li>
                  <li className="text-start font-semibold">
                    <Link
                      to={"/dashboard/customerlist"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Customer List
                    </Link>
                  </li>
                  <li className="text-start font-semibold  ">
                    <Link
                      to={"/dashboard/addcustomer"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Add customer
                    </Link>
                  </li>
                  <li className="text-start font-semibold ">
                    <Link
                      to={"/dashboard/productlist"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Product List
                    </Link>
                  </li>
                  <li className="text-start font-semibold mb-12 border-b-2 border-tertiary-dark">
                    <Link
                      to={"/dashboard/addproduct"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Add Product
                    </Link>
                  </li>
                </>
              )}
              <li className="text-start font-semibold">
                <a className="capitalize">All Products</a>
              </li>
              {categories.map((cat, index) => (
                <li className="" key={index}>
                  <a className="capitalize">{cat}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile h-auto hidden lg:grid">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content flex flex-col items-start "
          style={{ overflow: "hidden" }}
        >
          <div className="w-full">{children}</div>
        </div>
        <div className="drawer-side h-auto min-h-[100vh]">
          <div className="w-80 max-w-[80vw] h-full relative">
            <ul
              className={`menu p-4 h-full  w-80 max-w-[80vw] bg-tertiary text-primary 2xl:fixed justify-start items-start pt-16 pl-12 `}
            >
              {fromDashboard && (
                <>
                  <li className="text-start font-semibold">
                    <Link
                      to={"/dashboard"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Dashboard overview
                    </Link>
                  </li>
                  <li className="text-start font-semibold">
                    <Link
                      to={"/dashboard/customerlist"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Customer List
                    </Link>
                  </li>
                  <li className="text-start font-semibold  ">
                    <Link
                      to={"/dashboard/addcustomer"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Add customer
                    </Link>
                  </li>
                  <li className="text-start font-semibold ">
                    <Link
                      to={"/dashboard/productlist"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Product List
                    </Link>
                  </li>
                  <li className="text-start font-semibold mb-12 border-b-2 border-tertiary-dark">
                    <Link
                      to={"/dashboard/addproduct"}
                      className="text-xl text-primary-dark capitalize"
                    >
                      Add Product
                    </Link>
                  </li>
                </>
              )}
              <li className="text-start font-semibold">
                <a className="capitalize">All Products</a>
              </li>
              {categories.map((cat, index) => (
                <li className="text-start font-semibold" key={index}>
                  <a className="capitalize">{cat}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatDrawer;
