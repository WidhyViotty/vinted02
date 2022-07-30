import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      console.log(response.data);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h1>Connexion</h1>
      <input
        className="email"
        value={email}
        placeholder="Email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        className="password"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button className="login" type="submit">
        Se connecter
      </button>
      <br />
    </form>
  );
};

export default Login;
