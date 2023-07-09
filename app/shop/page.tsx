import React from "react";
import { Product } from "./types";
import ProductCard from "./ProductCard";

async function getProducts() {
  const res = await fetch(`${process.env.API_URL}/products`);
  const data = await res.json();
  return data;
}
const ShopPage = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ShopPage;
