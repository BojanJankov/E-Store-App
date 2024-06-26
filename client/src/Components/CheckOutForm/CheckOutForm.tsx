import { UseFormReturn } from "react-hook-form";
import "./CheckOutForm.css";
import { CheckoutFormValues } from "../../Pages/CheckoutPage/CheckOutPage";

interface CheckOutFormProps {
  checkOutForm: UseFormReturn<CheckoutFormValues>;
}

function CheckOutForm({ checkOutForm }: CheckOutFormProps) {
  const { register } = checkOutForm;
  return (
    <div className="CheckoutForm">
      <form className="form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input
            {...register("address", { required: true })}
            id="Address"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            {...register("phoneNumber", { required: true })}
            id="phoneNumber"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}

export default CheckOutForm;
