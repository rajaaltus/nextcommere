import React from "react";
import Categories from "./Categories";

type Props = {
  children: React.ReactNode;
};
const ShopLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen">
      <Categories />
      {children}
    </div>
  );
};

export default ShopLayout;
