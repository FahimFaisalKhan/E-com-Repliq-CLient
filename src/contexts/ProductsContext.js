import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";

export const ProductContext = createContext();
const ProductsContextProvider = ({ children }) => {
  const localCart = JSON.parse(localStorage.getItem("cartItems"));
  const [cartItems, setCartItems] = useState(localCart ? [...localCart] : []);

  const { currentUser, userLoading } = useContext(UserContext);

  const getCartItems = useCallback(async () => {
    console.log("lalala", currentUser._id);
    console.log("succeeddeeed 2");
    console.log(userLoading, currentUser);
    if (!userLoading && currentUser._id) {
      console.log("succeeddeeed 3");

      const { data } = await axios.get(
        `https://e-com-repliq-fahimfaisalkhan.vercel.app/cart/get-items?uid=${currentUser?._id}`
      );

      setCartItems([...data]);
      localStorage.setItem("cartItems", JSON.stringify([...data]));
    }
  }, [currentUser, userLoading]);
  useEffect(() => {
    getCartItems();
  }, [getCartItems]);
  const {
    isLoading: productsLoading,
    data: products,
    refetch: productsRefetch,
  } = useQuery({
    queryKey: ["products", "all"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://e-com-repliq-fahimfaisalkhan.vercel.app/products/all"
      );

      return data;
    },
  });

  const {
    data: categories,
    isLoading: catLoading,
    refetch: catRefetch,
  } = useQuery({
    queryKey: ["products", "categories"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://e-com-repliq-fahimfaisalkhan.vercel.app/products/categories"
      );

      return data;
    },
  });

  const compareAndUpdate = async (localCartItems) => {
    const { data } = await axios.put(
      "https://e-com-repliq-fahimfaisalkhan.vercel.app/cart/compare-update",
      { data: localCartItems }
    );
    console.log(data);
  };

  const changeCartItemQuantity = async (item) => {
    const existingProduct = cartItems.find(
      (i) => i.productId === item.productId
    );
    const restProducts = cartItems.filter(
      (i) => i.productId !== item.productId
    );
    console.log(existingProduct);

    existingProduct.quantity += 1;
    existingProduct.totalPrice =
      existingProduct.price * existingProduct.quantity;

    console.log("tt", existingProduct);
    try {
      const { data } = await axios.put(
        "https://e-com-repliq-fahimfaisalkhan.vercel.app/cart/increase-quantity",
        {
          _id: existingProduct._id,
          quantity: existingProduct.quantity,
          totalPrice: existingProduct.totalPrice,
        }
      );
      console.log(data);
      if (data.status === "success") {
        console.log("herer");
        setCartItems([...restProducts, existingProduct]);
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...restProducts, existingProduct])
        );
      }
    } catch (err) {}
  };
  const addToCart = async (product) => {
    const ids = cartItems.length && cartItems.map((i) => i.productId);
    if (ids.length && ids?.includes(product.productId)) {
      await changeCartItemQuantity(product);
    } else {
      const quantity = 1;
      const productToAdd = { quantity, ...product };
      try {
        const { data } = await axios.post(
          "https://e-com-repliq-fahimfaisalkhan.vercel.app/cart/add-item",
          {
            data: productToAdd,
          }
        );

        console.log(data);

        setCartItems([...cartItems, data]);
        localStorage.setItem("cartItems", JSON.stringify([...cartItems, data]));
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const deleteFromCart = async (id) => {
    const localCart = JSON.parse(localStorage.getItem("cartItems"));
    const cartAfterDelition = localCart.filter((item) => item._id !== id);

    setCartItems([...cartAfterDelition]);
    localStorage.setItem("cartItems", JSON.stringify(cartAfterDelition));

    const { data } = await axios.delete(
      `https://e-com-repliq-fahimfaisalkhan.vercel.app/cart/delete-item?id=${id}`
    );
  };

  // const cartItemsFetch = async () => {
  //   try {
  //   } catch (err) {}
  // };
  return (
    <ProductContext.Provider
      value={{
        productsLoading,
        products,
        productsRefetch,
        catLoading,
        categories,
        catRefetch,
        addToCart,
        cartItems,
        changeCartItemQuantity,
        setCartItems,
        compareAndUpdate,
        deleteFromCart,
        getCartItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
