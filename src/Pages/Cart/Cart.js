import React, { useEffect } from "react";
import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductsContext";
import CartCard from "./cartCard";

const Cart = () => {
  const { cartItems, setCartItems, compareAndUpdate } =
    useContext(ProductContext);
  useEffect(() => {
    const cleanup = () => {
      const localCart = localStorage.getItem("cartItems");
      if (localCart) {
        const localCartItems = JSON.parse(localCart);
        console.log(localCartItems);
        setCartItems([...localCartItems]);
        compareAndUpdate([...localCartItems]);
      }
    };

    return () => cleanup();
  }, [setCartItems]);
  return (
    <div className="container mx-auto  min-h-[80vh] my-8 text-primary flex flex-col gap-y-5 justify-center">
      {cartItems.map((i) => (
        <CartCard key={i._id} i={i} />
      ))}
    </div>
  );
};

export default Cart;
