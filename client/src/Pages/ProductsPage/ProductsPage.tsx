import { useCallback, useContext, useEffect, useState } from "react";
import "./ProductsPage.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductContext from "../../Context/ProductsContext";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { Product } from "../../Models/product.model";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductsPage() {
  const { products, addToCart } = useContext(ProductContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const query = searchParams.get("q");

  const showToastMessage = () => {
    toast.success("Product added !", {
      position: "bottom-right",
    });
  };

  const onSearch = useCallback(
    (value: string) => {
      setSearchParams((prevParams) => {
        prevParams.set("q", value);
        return prevParams;
      });

      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [products, setSearchParams]
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products, onSearch]);

  useEffect(() => {
    if (query) onSearch(query);
  }, [query, onSearch]);

  return (
    <section className="ProductsPage">
      <div className="input-div">
        <SearchInput onSearch={onSearch} defaultValue={query} />
      </div>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCart={addToCart}
              showToastMessage={showToastMessage}
            />
          ))
        ) : (
          <div className="no-products">No products found!</div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
}

export default ProductsPage;
