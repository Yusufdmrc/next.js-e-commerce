"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Headline from "../components/Headline";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { setPrice } from "@/utils/setPrice";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface CartDesignProps {
  currentUser: SafeUser | null;
}

const CartDesign: React.FC<CartDesignProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const router = useRouter();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Sepetin boş</div>
        <div>
          <Link href={"/"} className="text-slate-500 items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Alışverişe başla</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Headline title="Alışveriş Sepeti" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">ÜRÜN</div>
        <div className="justify-self-center">FİYAT</div>
        <div className="justify-self-center">ADET</div>
        <div className="justify-self-end">TOPLAM</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4 ">
        <div className="w-[200px]">
          <Button
            label="Sepeti Temizle"
            onClick={() => {
              handleClearCart();
            }}
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Ara Toplam</span>
            <span>{setPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">Kargo ödeme sırasında hesaplanır</p>
          <Button
            label={currentUser ? "Ödeme" : "Ödeme için giriş yapın"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />
          <Link href={"/"} className="text-slate-500 items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Alışverişe devam et</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
