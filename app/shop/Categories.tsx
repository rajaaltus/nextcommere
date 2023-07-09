import React from "react";
import CategoryItem from "./CategoryItem";

async function getCategories() {
  const res = await fetch(`${process.env.API_URL}/products/categories`);
  const data = await res.json();
  return data;
}
const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="flex items-center justify-start whitespace-nowrap space-x-4 overflow-x-scroll h-20">
      {categories.map((category: string, index: number) => (
        <CategoryItem name={category} key={index} />
      ))}
    </div>
  );
};

export default Categories;
