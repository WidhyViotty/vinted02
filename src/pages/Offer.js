import "./Offer.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  // const params = useParams();
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offer-page">
      <img
        className="offer-picture"
        src={data.product_image.secure_url}
        alt=""
      />
      <div className="offer-details">
        <h3 className="product-price">{data.product_price} €</h3>
        <span></span>
        <span className="product-details">
          <div className="font-face-rt">
            {data.product_details.map((item, index) => {
              const keys = Object.keys(item);

              return (
                <div key={index}>
                  {keys[0]} : {item[keys[0]]}
                </div>
              );
            })}
          </div>
        </span>
        <p></p>
        <h3 className="product-name">{data.product_name}</h3>
        <span className="product-description">
          <div className="font-face-rt">{data.product_description}</div>
        </span>
        <Link to="/">
          <button className="acheter">Acheter</button>
        </Link>
      </div>
    </div>
  );
};

export default Offer;
