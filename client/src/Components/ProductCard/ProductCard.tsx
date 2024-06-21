import { Link } from "react-router-dom";
import { Product } from "../../Models/product.model";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  addToCart: (selectedProduct: Product) => void;
  showToastMessage: () => void;
}

function ProductCard({
  product,
  addToCart,
  showToastMessage,
}: ProductCardProps) {
  return (
    <div className="ProductCard">
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="heading">{product.title}</div>
        <div className="card-info">
          <div className="img-container-card">
            <img src={product.image} alt="product image" height="120px" />
          </div>
        </div>
      </Link>
      <div className="buttons-div">
        <strong className="price">${product.price}</strong>
        <button
          className="addToCartBtn"
          onClick={() => {
            addToCart(product);
            showToastMessage();
          }}
        >
          {product.inCart ? "✔" : "🛒"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
