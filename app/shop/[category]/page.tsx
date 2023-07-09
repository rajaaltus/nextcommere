import React from "react";
import { Dish } from "../types";
import DishCard from "../DishCard";

const fetchDishesByCategory = async (category: string) => {
  const dishes = await fetch(
    `${process.env.API_URL}/dishes?category.name=${category}`
  );
  const data = await dishes.json();
  return data;
};

const CategoryPage = async ({ params }: any) => {
  const dishes: Dish[] = await fetchDishesByCategory(params.category);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {dishes.map((dish: Dish) => (
        <DishCard dish={dish} key={dish.id} />
      ))}
    </div>
  );
};

export default CategoryPage;
