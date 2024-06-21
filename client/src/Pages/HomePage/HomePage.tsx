import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="HomePage">
      <h1>Welcome to our E-store app!</h1>
      <Link to="/products">
        <Button title="Move to our products" />
      </Link>
    </section>
  );
}

export default HomePage;
