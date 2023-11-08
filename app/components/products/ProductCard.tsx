"use client";

import { setPrice } from "@/utils/setPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="cursor-pointer text-center text-sm p-2 col-span-1 border-[1px] border-x-slate-200 bg-slate-50 rounded-xl
    transition hover:scale-105"
    >
      <div className="w-full flex flex-col items-center gap-1">
        <div className=" w-full relative overflow-hidden aspect-square  ">
          <Image
            src={data.images[0].image}
            fill
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div className="font-semibold">{setPrice(data.price)}</div>
        <div>{data.reviews.length} reviews</div>
      </div>
    </div>
  );
};

export default ProductCard;
