import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1024px-Vinted_logo.png"
          alt="logo"
          style={{ height: "50px", width: "150px" }}
        />
      </div>
      <div>
        <input className="searchbar" placeholder="Rechercher des articles" />
      </div>
      {!token ? (
        <div className="buttons">
          <Link to="/signup">
            <button className="inscription">S'inscrire</button>
          </Link>
          <Link to="/login">
            <button className="connexion">Se connecter</button>
          </Link>
        </div>
      ) : (
        <div className="buttons">
          <button
            className="deconnexion"
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
          <button className="articles">Vends tes articles</button>
        </div>
      )}
    </header>
  );
};

export default Header;
