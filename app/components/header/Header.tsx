import Link from "next/link";
import Container from "../Container";
import { Roboto } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

const Header = () => {
  return (
    <div className="w-full bg-slate-200 sticky top-0 shadow-sm z-30">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex justify-between items-center gap-3 md-gap-0">
            <Link href="/" className={`${roboto.className} font-bold text-xl`}>
              E-Commerce
            </Link>
            <div className="hidden md:block">Ara</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
