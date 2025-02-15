import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data.products));
      });
  }, []);

  const productsItems = useSelector((state) => state.product.products);

  return (
    <div className="productsContainer">
      <h1>Товары</h1>
      <div className="productsList">
        {productsItems?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
