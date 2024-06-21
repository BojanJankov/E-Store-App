import { useContext } from "react";
import { Product } from "../../Models/product.model";
import "./ProductDetailsPanel.css";
import ProductContext from "../../Context/ProductsContext";

interface ProductDetailsPanelProps {
  product: Product;
}

function ProductDetailsPanel({ product }: ProductDetailsPanelProps) {
  const { addToCart } = useContext(ProductContext);
  console.log(product);
  return (
    <div className="ProductDetailsPanel">
      <h3>{product.title}</h3>
      <div className="panel-content">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div className="panel-details">
          <p>{product.description}</p>
          <div className="panel-controls">
            <p>{product.rating}/5</p>
            <p>${product.price}</p>
            <button
              className="cart-button"
              onClick={() => {
                addToCart(product);
              }}
            >
              {product.inCart ? "✔" : "🛒"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPanel;
