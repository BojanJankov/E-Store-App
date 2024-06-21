import { useContext, useEffect, useState } from "react";
import "./ProductsDetailsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsPanel from "../../Components/ProductDetailsPanel/ProductDetailsPanel";
import ProductContext from "../../Context/ProductsContext";
import { Product } from "../../Models/product.model";

function ProductsDetailsPage() {
  const { products } = useContext(ProductContext);
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === Number(productId)
    );

    if (products.length > 0 && !foundProduct) navigate("/not-found");

    if (foundProduct) {
      setSelectedProduct(foundProduct);
    }
  }, [productId, products, navigate]);

  return (
    <section className="ProductsDetailsPage">
      <div className="page-details-heading">
        <h2>Product Details</h2>
      </div>
      <div className="page-content">
        {selectedProduct && <ProductDetailsPanel product={selectedProduct} />}
      </div>
    </section>
  );
}

export default ProductsDetailsPage;
