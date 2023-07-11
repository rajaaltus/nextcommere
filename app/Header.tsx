"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl shadow-2xl w-full  mx-auto flex items-center justify-start h-16  border-b border-gray-700 px-8 mt-8 ">
      <ul className="flex items-center mx-auto max-w-7xl space-x-8">
        <li
          className={`${
            pathname === "/"
              ? "underline underline-offset-8 underline-gray-300"
              : "underline-none"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${
            pathname.includes("/shop")
              ? "underline underline-offset-8 underline-gray-300"
              : "underline-none"
          }`}
        >
          <Link href="/shop">Shop</Link>
        </li>
        <li
          className={`${
            pathname === "/cart"
              ? "underline underline-offset-8 underline-gray-300"
              : "underline-none"
          }`}
        >
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
