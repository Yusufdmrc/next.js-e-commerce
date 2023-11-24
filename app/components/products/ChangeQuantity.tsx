"use-client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface ChangeQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const buttonStyle = `border-[1.5px] border-slate-300 rounded px-2`;

const ChangeQuantity: React.FC<ChangeQuantityProps> = ({
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-bold">ADET:</div>}
      <div className="flex gap-3 text-base items-center">
        <button className={buttonStyle} onClick={handleQuantityDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={buttonStyle} onClick={handleQuantityIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default ChangeQuantity;
