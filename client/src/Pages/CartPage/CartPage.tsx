import { useContext } from "react";
import CartList from "../../Components/CartList/CartList";
import "./CartPage.css";
import ProductContext from "../../Context/ProductsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartPage() {
  const { getProductsInCart, removeFromCart } = useContext(ProductContext);
  const products = getProductsInCart();

  const showToastMessage = () => {
    toast.error("Product removed !", {
      position: "bottom-right",
    });
  };

  return (
    <section className="CartPage">
      <div className="cart-page-heading">
        <h2>Cart</h2>
      </div>
      <div className="page-content">
        <CartList
          cartProducts={products}
          removeFromCart={removeFromCart}
          showToastMessage={showToastMessage}
        />
      </div>
      <ToastContainer />
    </section>
  );
}

export default CartPage;
