import { Link } from "react-router-dom";
import "./ErrorPages.css";

function ErrorPages() {
  return (
    <section className="ErrorPages">
      <div className="error-message">
        <h1>ERROR 404, PAGE NOT FOUND!</h1>
        <Link to="/">Return to home page</Link>
      </div>
    </section>
  );
}

export default ErrorPages;
