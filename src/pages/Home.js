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
          src="https://www.vinted.fr/assets/seller-promotion/other/banner-wide-9b45d0aa9a311c4ff6013e9cf3bc2b6646468be3d2f553192c63598685fcc177.jpg"
          alt="banner"
          style={{ width: 1400, height: 500 }}
        />
      </div>
      {data.offers.map((offer) => {
        // console.log(offer._id);
        return (
          <div className="section">
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <div className="card">
                <h2>{offer.product_name}</h2>
                <img
                  style={{ height: 150, objectFit: "cover" }}
                  src={offer.product_image.secure_url}
                  alt=""
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
