import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Total from "./components/Total";

function App() {
  const [quantityGlobal, setQuantityGlobal] = useState(0);

  return (
    <div className="App">
      <h1>Магазин</h1>
      <div className="products">
        <Products />
        <Cart />
        <Total />
      </div>
    </div>
  );
}

export default App;
