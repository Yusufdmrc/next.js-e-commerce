import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import RatingList from "./RatingList";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log(params);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Değerlendirme Ekle</div>
          <RatingList product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
