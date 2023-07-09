import React from "react";
import { Dish } from "./types";
import DishCard from "./DishCard";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDishes() {
  const res = await fetch(`${process.env.API_URL}/dishes`);
  const data = await res.json();
  return data;
}
const ShopPage = async () => {
  const dishes = await getDishes();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {dishes.map((dish: Dish) => (
        <DishCard dish={dish} key={dish.id} />
      ))}
    </div>
  );
};

export default ShopPage;
