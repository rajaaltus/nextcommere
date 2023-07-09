"use client";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {
  name: string;
};
const CategoryItem = ({ name }: Props) => {
  const router = useRouter();
  const handleClick = (name: string) => {
    router.push(`/shop/${name}`);
  };
  return (
    <div
      className="px-4 py-2 border border-gray-700 rounded-full hover:border-gray-500 hover:bg-gray-700 duration-200 cursor-pointer capitalize"
      onClick={() => handleClick(name)}
    >
      {name}
    </div>
  );
};

export default CategoryItem;
