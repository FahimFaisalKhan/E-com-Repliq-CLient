import React, { useContext } from "react";
import { Avatar } from "react-daisyui";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductsContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="overflow-x-auto container mx-auto my-12">
      <table className="table w-full rounded-none bg-secondary">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody className="bg-secondary rounded-none text-primary-dark font-semibold">
          {products.map((p, i) => (
            <tr key={i} className="">
              <th className="rounded-none">{i + 1}</th>
              <td>
                <Link to={`/detail/${p._id}`}>
                  <Avatar src={p.thumbnail} shape="circle" size="sm" />
                </Link>
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>{p.title}</Link>{" "}
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>{p.brand}</Link>
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>{p.rating.toFixed(1)}/5</Link>
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>{p.stock}</Link>
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>${p.price}</Link>
              </td>
              <td>
                <Link to={`/detail/${p._id}`}>{p.discountPercentage}%</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
