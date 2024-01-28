import { getCurrentUser } from "@/action/getCurrentUser";
import Container from "../components/Container";
import CartDesign from "./CartDesign";

const Cart = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="pt-8 ">
      <Container>
        <CartDesign currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
