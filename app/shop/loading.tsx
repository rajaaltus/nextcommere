import React from "react";

const ShopLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {[...Array(12)].map((_, i) => (
        <div className="w-full h-96 flex flex-col">
          <div
            className="w-full h-64 bg-gray-700 animate-pulse rounded-lg mt-4"
            key={i}
          ></div>
          <div className="w-2/3 h-4 bg-gray-700 animate-pulse rounded-lg mt-4"></div>
          <div className="w-1/2 h-2 bg-gray-700 animate-pulse rounded-lg mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default ShopLoading;
