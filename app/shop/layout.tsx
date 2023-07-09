import React from "react";
import Categories from "./Categories";

type Props = {
  children: React.ReactNode;
};
const ShopLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-auto pb-6">
      <Categories />
      {children}
    </div>
  );
};

export default ShopLayout;
