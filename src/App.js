import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="App"></div>
      <nav className="container">
        {/* <Link to="home"> Homepage</Link>
          <br />
          <Link to="offer"> Page produit</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
