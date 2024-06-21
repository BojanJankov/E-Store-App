import { createContext, useEffect, useState } from "react";
import { Product } from "../Models/product.model";
import { Loader } from "../Components/Loader/Loader";
import { api } from "../services/api";

interface ContextType {
  products: Product[];
  addToCart: (selectedProduct: Product) => void;
  removeFromCart: (selectedProduct: Product) => void;
  getProductsInCart: () => Product[];
  addQuntity: (selectedProduct: Product) => void;
  removeQuntity: (selectedProduct: Product) => void;
}

const ProductContext = createContext<ContextType>({
  products: [],
  addToCart() {},
  removeFromCart() {},
  getProductsInCart() {
    return [];
  },

  addQuntity() {},
  removeQuntity() {},
});

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get("products");
      const products = data as Product[];
      setProducts(
        products.map((product) => ({
          ...product,
          inCart: false,
          quantity: 1,
        }))
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === selectedProduct.id) {
          return { ...product, inCart: true, quantity: 1 };
          return product;
        } else {
          return product;
        }
      });
    });
  };

  const removeFromCart = (selectedProduct: Product) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === selectedProduct.id) {
          return { ...product, inCart: false };
        } else {
          return product;
        }
      });
    });
  };

  // const getProductsInCart = () => {
  //   let productsInLocalStorage = localStorage.getItem("products");

  //   if (productsInLocalStorage !== null) {
  //     const data: Product[] = JSON.parse(productsInLocalStorage);
  //     console.log("data", data);
  //     return data.filter((product) => product.inCart);
  //   } else {
  //     return [];
  //   }
  // };
  const getProductsInCart = () => {
    return products.filter((product) => product.inCart);
  };

  const addQuntity = (selectedProduct: Product) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === selectedProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });
    });
  };

  const removeQuntity = (selectedProduct: Product) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === selectedProduct.id && product.quantity !== 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <ProductContext.Provider
        value={{
          products,
          addToCart,
          removeFromCart,
          getProductsInCart,
          addQuntity,
          removeQuntity,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContext;
