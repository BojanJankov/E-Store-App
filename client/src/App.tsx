import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage/ProductsDetailsPage";
import ErrorPages from "./Pages/ErrorPages/ErrorPages";
import HomePage from "./Pages/HomePage/HomePage";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <section className="App">
      <Header title="E-store" />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductsDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPages />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;