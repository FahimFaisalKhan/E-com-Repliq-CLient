import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductsContext";

import ProductCard from "../../../Shared/ProductCard/ProductCard";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 m-12">
      {products?.map((p) => (
        <Link to={`/detail/${p._id}`} key={p._id}>
          <ProductCard product={p} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
