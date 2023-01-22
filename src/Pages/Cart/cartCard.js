import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Avatar, Button } from "react-daisyui";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsContext";

const CartCard = ({ i, updating }) => {
  console.log(updating);
  const { deleteFromCart } = useContext(ProductContext);
  const [qty, setQty] = useState(i.quantity);
  const [totalPrice, setTotalPrice] = useState(i.totalPrice);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    cartItems?.map((item) => {
      if (item._id === i._id) {
        item.quantity = qty;
        item.totalPrice = totalPrice;
      }
      return item;
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [qty, i._id]);

  return (
    <div
      key={i._id}
      className="border-2 border-secondary-light  items-center flex-col sm:flex-row gap-x-5 lg:gap-x-[auto]   flex  p-3"
    >
      <Avatar src={i.image} />
      <div className="flex flex-col lg:flex-row items-start grow justify-around  gap-y-2 lg:gap-y-[auto] lg:items-center">
        <h2 className="w-[15%] max-w-[15%]">{i.title}</h2>
        <p>In Stock</p>
        <div className="flex ">
          <button
            disabled={qty >= i.stock}
            onClick={() => {
              setQty(qty + 1);
              setTotalPrice(totalPrice + i.price);
            }}
            className="w-[32%] text-2xl bg-secondary-light inline-flex justify-center items-center rounded-l-sm p-0"
          >
            <span className="mb-1.5">+</span>
          </button>
          <input
            value={qty}
            className="w-[32%] text-center"
            type="text"
            readOnly
          />
          <button
            disabled={qty <= 1}
            onClick={() => {
              setQty(qty - 1);
              setTotalPrice(totalPrice - i.price);
              //   changeCartItemQuantity(i, "decrease");
            }}
            className="w-[32%] text-2xl bg-secondary-light inline-flex justify-center items-center rounded-r-sm p-0"
          >
            <span className="mb-1.5">-</span>
          </button>
        </div>
        <p>${totalPrice}</p>
        <Link
          to={`/checkout/${i.productId}`}
          state={{
            title: i.title,
            quantity: i.quantity,
            totalPrice: i.totalPrice,
            image: i.image,
          }}
        >
          <Button
            disabled={updating}
            className="capitalize"
            color="secondary"
            size="sm"
          >
            Checkout
          </Button>
        </Link>

        <Button
          onClick={() => deleteFromCart(i._id)}
          className="capitalize"
          color="error"
          size="sm"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
