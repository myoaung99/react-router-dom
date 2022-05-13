import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>This is Products screen.</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Mouse</Link>
        </li>
        <li>
          <Link to="/products/p3">A Car</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
