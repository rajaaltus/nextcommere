import React from "react";
import { Product } from "../types";
import ProductCard from "../ProductCard";

const fetchDishesByCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.API_URL}/products/category/${category}`
  );
  const data = await res.json();
  return data;
};

const CategoryPage = async ({ params }: any) => {
  const products: Product[] = await fetchDishesByCategory(params.category);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default CategoryPage;
