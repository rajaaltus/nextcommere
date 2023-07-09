import Image from "next/image";
import React from "react";
import { Dish } from "./types";

type Props = {
  dish: Dish;
};
const DishCard = ({ dish }: Props) => {
  return (
    <div className="w-full h-96 rounded-lg bg-black border border-white/20 flex flex-col">
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          src={`${process.env.API_URL}${dish.image.url}`}
          alt={dish.name}
          fill
          sizes="(max-width: 568px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className="object-cover object-center rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4 flex flex-col space-y-1 h-auto">
        <span>{dish.name}</span>
        <span className="text-sm text-gray-400">{dish.price}</span>
      </div>
    </div>
  );
};

export default DishCard;
