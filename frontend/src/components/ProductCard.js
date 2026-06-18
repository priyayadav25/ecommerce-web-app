import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>₹{product.price}</p>

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
