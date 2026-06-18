import { useEffect, useState }
from "react";

import API from "../api";
import ProductCard
from "../components/ProductCard";

function Home() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    API.get("/products")
      .then((res) =>
        setProducts(res.data)
      )
      .catch(console.error);

  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>

      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Home;
