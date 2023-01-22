import React from "react";
import { useContext } from "react";
import { Avatar } from "react-daisyui";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";
const Navigation = () => {
  const { cartItems } = useContext(ProductContext);
  console.log(cartItems);
  return (
    <div className=" bg-primary fixed w-full z-50">
      <div className="navbar sm:px-16 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              htmlFor="my-drawer-2"
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/signin"}>Sign in</Link>
            </li>
            <li>
              <Link to={"/signUP"}>Sign up</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-x-5">
          <Link className="relative" to={"/cart"}>
            <FaShoppingCart size={25} />
            {cartItems?.length > 0 && (
              <span className="absolute w-5 h-5 rounded-full bg-red-500 -top-2.5 -right-3 inline-flex justify-center items-center">
                {cartItems?.length && cartItems.length}
              </span>
            )}
          </Link>

          <Avatar
            size={"xs"}
            shape="circle"
            src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
