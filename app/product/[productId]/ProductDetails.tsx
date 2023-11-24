"use client";

import Button from "@/app/components/Button";
import ChangeColor from "@/app/components/products/ChangeColor";
import ChangeQuantity from "@/app/components/products/ChangeQuantity";
import ProductImage from "@/app/components/products/ProductImage";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizantal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  console.log(cartProduct);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="text-slate-400 text-sm flex flex-col gap-2  ">
        <h2 className="text-slate-600 font-medium text-2xl">{product.name}</h2>
        <div className="flex gap-3 items-center">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} yorum</div>
        </div>
        <Horizantal />
        <div className="text-justify">{product.description}</div>
        <Horizantal />
        <div>
          <span className="font-semibold">Kategori:</span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">Marka:</span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-600 " : "text-rose-400"}>
          {product.inStock ? "Stokta var " : "Stok yok"}
        </div>
        <Horizantal />
        <ChangeColor
          cartProduct={cartProduct}
          images={product.images}
          handColorSelect={handleColorSelect}
        />
        <Horizantal />
        <ChangeQuantity
          cartProduct={cartProduct}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
        />
        <Horizantal />
        <div className="max-w-[300px]">
          <Button label="Sepete Ekle" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
