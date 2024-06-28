import { NavLink } from "react-router-dom";
import { NavLinkModel } from "../../Models/core.model";
import "./Navbar.css";
import { useContext } from "react";
import ProductContext from "../../Context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Context/AuthContext";
function Navbar() {
  const { getProductsInCart } = useContext(ProductContext);
  const { accessToken } = useContext(AuthContext);

  const cartCount = getProductsInCart().length;
  const navLinks: NavLinkModel[] = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/add-product",
      text: "Add products",
    },
    {
      path: "/about",
      text: "About Us",
    },
    {
      path: "/contact",
      text: "Contact",
    },
    {
      path: "/login",
      text: "Login",
    },
    {
      path: "/cart",
      text: "Cart",
    },
  ];
  return (
    <nav className="Navbar">
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>
              {accessToken !== null && link.text === "Login" ? (
                "Logout"
              ) : "Login" && link.text && link.text === "Cart" ? (
                <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              ) : (
                link.text
              )}{" "}
              {link.path === "/cart" && cartCount > 0 && (
                <span>{cartCount}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
