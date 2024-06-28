import { useContext, useState } from "react";
import "./LoginPage.css";
import { AuthContext } from "../../Context/AuthContext";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { accessToken, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLoginSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("log in");

      const accessToken = response.headers["access-token"];
      const refreshToken = response.headers["refresh-token"];

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      login(accessToken);
      navigate(-1);
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
    }
  };

  const removeAccessToken = () => {
    logout();
    localStorage.clear();
    window.location.reload();
  };

  if (accessToken !== null) {
    return (
      <div className="logout-container">
        <div className="logout-form">
          <h1>Logout</h1>
          <h2>Are you sure you want to log out?</h2>
          <p>You can log out here if you want:</p>
          <button className="logout-button" onClick={removeAccessToken}>
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="LoginPage">
      <form action="" method="POST" className="login-form">
        <div className="email-div">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login-button" onClick={onLoginSubmit}>
          Login
        </button>
        <div className="register-link">
          You don't have account ? <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
