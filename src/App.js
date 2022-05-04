import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <body>
        <nav className="container">
          {/* <Link to="home"> Homepage</Link>
          <br />
          <Link to="offer"> Page produit</Link> */}
        </nav>
      </body>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
