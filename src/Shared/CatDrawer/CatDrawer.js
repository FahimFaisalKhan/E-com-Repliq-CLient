import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductsContext";
import Spinner from "../Spinner/Spinner";

import "./CatDwawer.css";
const CatDrawer = ({ children }) => {
  const { productsLoading, catLoading, categories } =
    useContext(ProductContext);

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
        <div className="drawer-side ">
          <div className="w-80 max-w-[80vw] h-full relative">
            <ul className="menu p-4 h-full  w-80 max-w-[80vw] bg-tertiary text-primary fixed justify-start items-start pt-16 pl-12 ">
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
