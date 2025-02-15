import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart, removeProduct } from "../store/productSlice";

const Product = ({ product, isCart }) => {
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);

  if (!product) return null;

  return (
    <div className="productCard">
      <h3 className="productTitle">{product.title}</h3>
      <p className="productPrice">{`${product.price} руб`}</p>

      {isCart ? (
        <div className="counter">
          <button onClick={() => dispatch(removeProduct(product.id))}>-</button>
          {product.quantity ?? 0}
          <button onClick={() => dispatch(addToCart(product))}>+</button>
        </div>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>В корзину</button>
      )}

      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Скрыть описание" : "Показать описание"}
      </button>
      {showDescription && <p>{product.description}</p>}
    </div>
  );
};

export default Product;
