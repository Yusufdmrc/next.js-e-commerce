import Link from "next/link";
import Container from "../Container";
import List from "./List";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-sm mt-16 text-slate-200 bg-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 mt-2">
          <List>
            <h3 className="mb-2 font-bold text-base">Kategoriler</h3>
            <Link href="#">Telefonlar</Link>
            <Link href="#">Televizyonlar</Link>
            <Link href="#">Laptoplar</Link>
            <Link href="#">Masaüstüler</Link>
            <Link href="#">Saatler</Link>
            <Link href="#">Aksesuarlar</Link>
          </List>
          <List>
            <h3 className="mb-2 font-bold text-base">Kullanıcı Hizmetleri</h3>
            <Link href="#">Hizmet</Link>
            <Link href="#">İletişim</Link>
            <Link href="#">Kargo Politikası</Link>
            <Link href="#">İadeler ve değişimler</Link>
            <Link href="#">SSS</Link>
          </List>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="mb-2 font-bold text-base">Hakkımızda</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              molestiae laudantium natus consequatur hic blanditiis nisi!
              Dignissimos nam delectus corrupti alias fugiat! Maxime tempore
              quibusdam numquam velit commodi minus ea!
            </p>
            <p>
              &copy; {new Date().getFullYear()} E-Commerce.Tüm hakları saklıdır.
            </p>
          </div>
          <List>
            <h3 className="mb-2 font-bold text-base">Bizi takip edin</h3>
            <div className="flex gap-2">
              <Link href="#">
                <FaFacebook size={24} />
              </Link>
              <Link href="#">
                <FaTwitter size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaYoutube size={24} />
              </Link>
            </div>
          </List>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
