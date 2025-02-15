import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Cart = () => {
  const selectedItems = useSelector((state) => state.product.selected);
  return (
    <div className="cartContainer">
      <h1>Корзина</h1>
      <div className="products">
        {selectedItems?.map((product) => (
          <Product product={product} isCart={true} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
