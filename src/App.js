import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      //Action de connexion
      Cookies.set("userToken", token, { expires: 10 });
      setToken(token);
    } else {
      //action de déconnexion
      Cookies.remove("userToken");
      setToken(null);
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <div className="App"></div>
      <nav className="container">
        {/* <Link to="home"> Homepage</Link>
          <br />
          <Link to="offer"> Page produit</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
