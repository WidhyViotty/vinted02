import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <div className="container-banner">
        <img
          className="banner"
          src="https://www.vinted.fr/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg"
          alt="banner"
          // style={{ width: 1400, height: 500 }}
        />
      </div>
      <h2>Articles populaires</h2>
      <div className="section">
        {data.offers.map((offer) => {
          // console.log(offer._id);
          return (
            <div>
              {/* console.log({offer.owner.account.username}); */}
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <div className="offer">
                  <div className="user">
                    {offer.owner.account.avatar && (
                      <img
                        className="avatar"
                        src={offer.owner.account.avatar.secure_url}
                        alt=""
                      />
                    )}
                    <span className="user_name">
                      {offer.owner.account.username}
                    </span>
                  </div>
                  <img
                    className="picture"
                    src={offer.product_image.secure_url}
                    alt=""
                  />
                  <div className="offer-description">
                    <span>{offer.product_price}€</span>
                    <span>
                      {offer.product_details.map((item, index) => {
                        return (
                          <div key={index}>
                            {item.MARQUE}
                            {item.TAILLE}
                          </div>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
