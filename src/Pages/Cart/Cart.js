import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { ProductContext } from "../../contexts/ProductsContext";
import CartCard from "./cartCard";

const Cart = () => {
  const { cartItems, setCartItems, compareAndUpdate } =
    useContext(ProductContext);
  const [updating, setUpdating] = useState(false);
  useEffect(() => {
    const cleanup = async () => {
      const localCart = localStorage.getItem("cartItems");
      const localCartItems = JSON.parse(localCart);
      if (localCartItems) {
        setUpdating(true);
        console.log(localCartItems);
        setCartItems([...localCartItems]);
        await compareAndUpdate([...localCartItems]);
        setUpdating(false);
      }
    };

    return () => cleanup();
  }, [setCartItems]);
  return (
    <div className="container mx-auto  min-h-[80vh] my-8 text-primary flex flex-col gap-y-5 justify-center">
      {cartItems.length ? (
        cartItems.map((i) => <CartCard key={i._id} i={i} updating={updating} />)
      ) : (
        <h1 className="text-3xl text-center">No Items in cart</h1>
      )}
    </div>
  );
};

export default Cart;
