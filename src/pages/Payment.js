import "./Payment.css";
import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation().state;

  console.log(location);
  const userToken = Cookies.get("userToken");
  //   console.log(userToken);
  return userToken ? <div>Payment</div> : <Navigate to="/login" />;
};

export default Payment;
