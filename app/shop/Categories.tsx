import React from "react";
import { Category } from "./types";
import CategoryItem from "./CategoryItem";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getCategories() {
  const res = await fetch(`${process.env.API_URL}/categories`);
  const data = await res.json();
  return data;
}
const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="flex items-center justify-start whitespace-nowrap space-x-4 overflow-x-scroll h-20">
      {categories.map((category: Category) => (
        <CategoryItem name={category.name} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
