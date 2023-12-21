"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { totalQuantity } = useCart();
  return (
    <Link className="relative cursor-pointer" href="/cart">
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span className="text-white absolute top-[-10px] right-[-10px] bg-slate-700 h-6 w-6 rounded-full flex items-center justify-center text-sm">
        {totalQuantity}
      </span>
    </Link>
  );
};

export default CartCount;
