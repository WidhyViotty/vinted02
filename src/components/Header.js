const Header = () => {
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
      <div className="buttons">
        <button className="inscription">S'inscrire</button>
        <button className="connexion">Se connecter</button>
        <button className="articles">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
