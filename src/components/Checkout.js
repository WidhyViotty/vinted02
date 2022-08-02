import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Checkout = (data) => {
  const stripe = useStripe();
  const elements = useElements();

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
          title: data.product_name,
          amount: data.product_price,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className="checkoutForm" onSubmit={handlePayment}>
      <CardElement />
      <input className="payer" type="submit" value="Payer" />
    </form>
  );
};

export default Checkout;
