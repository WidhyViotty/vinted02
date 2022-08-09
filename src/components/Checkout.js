import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "rgb(240, 57, 122)",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#2DB0BA",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const Checkout = (data) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const cardInfos = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardInfos, {
        name: "Widhy",
      });
      console.log(stripeResponse); //pour vérifier que le token est bien générer par stripe

      //   const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: data.data.product_name,
          amount: data.data.product_price,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!completed ? (
        <form className="checkoutForm" onSubmit={handlePayment}>
          <CardElement options={CARD_ELEMENT_OPTIONS} />
          <input className="payer" type="submit" value="Payer" />
        </form>
      ) : (
        <span className="validPayment">Ton paiement est accepté</span>
      )}
    </div>
  );
};

export default Checkout;
