import { useForm } from "react-hook-form";
import "./CheckOutPage.css";
import { AddOrder } from "../../Models/order.model";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductContext from "../../Context/ProductsContext";
import CheckOutForm from "../../Components/CheckOutForm/CheckOutForm";
import CheckOutDetails from "../../Components/CheckOutDetails/CheckOutDetails";
import { AuthContext } from "../../Context/AuthContext";

export interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

function CheckOutPage() {
  const { accessToken } = useContext(AuthContext);
  const { getProductsInCart, resetCart } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [accessToken]);

  const form = useForm<CheckoutFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    },
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmitOrder = () => {
    if (!isValid) return;

    const { firstName, lastName, address, phoneNumber } = form.getValues();

    console.log(phoneNumber);

    const inCartProducts = getProductsInCart();

    const total = getProductsInCart().reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const addOrder: AddOrder = {
      fullName: `${firstName} ${lastName}`,
      address,
      phoneNumber,
      date: new Date(),
      amount: total,
      products: inCartProducts.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    };
    console.log(addOrder);
    postNewOrder(addOrder);
  };

  const postNewOrder = async (body: AddOrder) => {
    try {
      await api.post("/orders", body);
      resetCart();
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  if (accessToken === null) {
    return (
      <div className="forbiddenContainer">
        <h1>You must be logged in before viewing this page!</h1>
        <p>You'll be redirected in 2 seconds</p>
      </div>
    );
  }

  return (
    <section className="CheckOutPage">
      <h1>Checkout your order</h1>
      <div className="CheckOutContainer">
        <CheckOutForm checkOutForm={form} />
        <CheckOutDetails onSubmitOrder={onSubmitOrder} />
      </div>
    </section>
  );
}

export default CheckOutPage;
