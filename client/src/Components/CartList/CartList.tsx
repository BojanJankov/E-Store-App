import { useNavigate } from "react-router-dom";
import { Product } from "../../Models/product.model";
import CartItem from "../CartItem/CartItem";
import "./CartList.css";

interface CartListProps {
  cartProducts: Product[];
  removeFromCart: (selectedProduct: Product) => void;
  showToastMessage: () => void;
}

function CartList({
  cartProducts,
  removeFromCart,
  showToastMessage,
}: CartListProps) {
  const navigate = useNavigate();

  return (
    <>
      {cartProducts.length > 0 ? (
        <ol className="CartList">
          {cartProducts.map((product, i) => (
            <CartItem
              key={i}
              product={product}
              removeFromCart={removeFromCart}
              showToastMessage={showToastMessage}
            />
          ))}
          <div className="total-price">
            Total: $
            {cartProducts
              .reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )
              .toFixed(2)}
            <button
              className="checkout-button"
              onClick={() => [navigate("/checkout")]}
            >
              Checkout
            </button>
          </div>
        </ol>
      ) : (
        <h3 className="CartList-heading">No products in cart...</h3>
      )}
    </>
  );
}

export default CartList;
