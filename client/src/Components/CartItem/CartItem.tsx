import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../../Models/product.model";
import "./CartItem.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ProductContext from "../../Context/ProductsContext";
import { Link } from "react-router-dom";

interface CartItemProps {
  product: Product;
  removeFromCart: (selectedProduct: Product) => void;
  showToastMessage: () => void;
}

function CartItem({
  product,
  removeFromCart,
  showToastMessage,
}: CartItemProps) {
  const { addQuntity, removeQuntity } = useContext(ProductContext);
  console.log(product);
  const totalProductPrice = Number(product.price) * product.quantity;
  console.log(totalProductPrice);

  return (
    <li className="CartItem">
      <div className="title-div">
        <Link to={`/products/${product.id}`}>
          <strong className="title">{product.title}</strong>
        </Link>
      </div>
      <div className="info-div">
        <div className="quntity-div">
          <button
            onClick={() => {
              removeQuntity(product);
            }}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => {
              addQuntity(product);
            }}
          >
            +
          </button>
        </div>
        <div className="price-remove-div">
          <div>
            <strong>${totalProductPrice.toFixed(2)}</strong>
          </div>
          <button
            className="cartItemBtn"
            onClick={() => {
              removeFromCart(product);
              showToastMessage();
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} className="cartItemBtn" />
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
