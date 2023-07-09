import Image from "next/image";
import React from "react";
import { Product } from "./types";

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full h-96 rounded-lg bg-black border border-white/20 flex flex-col">
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 568px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className="object-cover object-center rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4 flex flex-col space-y-1 h-auto">
        <span className="text-sm truncate">{product.title}</span>
        <span className="text-sm text-gray-400">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
