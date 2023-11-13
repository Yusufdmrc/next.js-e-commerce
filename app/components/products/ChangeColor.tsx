"use client";

import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface ChangeColorProps {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handColorSelect: (value: SelectedImgType) => void;
}

const ChangeColor: React.FC<ChangeColorProps> = ({
  images,
  cartProduct,
  handColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-bold">RENK:</span>
        <div className="flex gap-1">
          {images.map((image) => {
            return (
              <div
                key={image.color}
                onClick={() => handColorSelect(image)}
                className={`
               h-7 w-7 flex justify-center items-center border-teal-300 rounded-full ${
                 cartProduct.selectedImg.color === image.color
                   ? "border-[1.5px]"
                   : "border-none"
               }
              `}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 cursor-pointer border-slate-200 
                rounded-full
                "
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChangeColor;
