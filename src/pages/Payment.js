import "./Payment.css";
import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../components/Checkout";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation().state;
  const { data } = location;

  console.log(location);
  const userToken = Cookies.get("userToken");
  //   console.log(userToken);
  return userToken ? (
    <div className="payment">
      <div>
        <h3>Résumé de la commande</h3>
        <div className="recap">
          <span>{data.product_name} : </span>
          <span>{data.product_price}€</span>
        </div>
      </div>
      <div className="card">
        <Elements stripe={stripePromise}>
          <Checkout data={data} />
        </Elements>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
