import { useForm } from "react-hook-form";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const { register, handleSubmit } = useForm<RegisterFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const handleRegister = async (body: RegisterFormValues) => {
    try {
      const response = await api.post("/auth/register", body);

      console.log(response);
      toast.success("You successfully create an account!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Invalid register, try again!");
    }
  };
  return (
    <section className="RegisterPage">
      <form
        action=""
        className="register-form"
        method="POST"
        onSubmit={handleSubmit((data) => handleRegister(data))}
      >
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="register-email">Email:</label>
          <input
            type="text"
            id="register-email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="register-password">Password:</label>
          <input
            type="password"
            id="register-password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <button className="register-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
