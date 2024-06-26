import { useForm } from "react-hook-form";
import "./AddProductPage.css";
import { api } from "../../services/api";
import { useContext } from "react";
import ProductContext from "../../Context/ProductsContext";
import { useNavigate } from "react-router-dom";

interface FormValues {
  title: string;
  stock: string;
  rating: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

function AddProductPage() {
  const { fetchProducts } = useContext(ProductContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, isSubmitted },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
      price: "",
      image: "",
      description: "",
      category: "",
      stock: "",
      rating: "",
    },
  });

  const onSubmitFetch = async (data: FormValues) => {
    const values = {
      title: data.title,
      stock: Number(data.stock),
      rating: Number(data.rating),
      price: Number(data.price),
      description: data.description,
      image: data.image,
      category: data.category,
    };

    try {
      const response = await api.post("products", values, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const jsonData = await response.data;
      console.log(jsonData);
      fetchProducts();
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const watchImage = watch("image");

  const placeholderImage =
    "https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg";

  return (
    <section className="AddProductPage">
      <form
        action=""
        className="add-product-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          onSubmitFetch(data);
        })}
      >
        <div className="input-form-div">
          <h4>Add your porduct details here:</h4>
          <input
            type="text"
            {...register("title", {
              required: { value: true, message: "Title is required" },
              minLength: 3,
              maxLength: 100,
            })}
            placeholder="Title"
          />
          <input
            type="text"
            {...register("category", {
              required: { value: true, message: "Category is required" },
              minLength: 3,
              maxLength: 100,
            })}
            placeholder="Category"
          />
          <input
            type="text"
            {...register("description", {
              required: { value: true, message: "Description is required" },
              minLength: 30,
              maxLength: 150,
            })}
            placeholder="Description"
          />
          <input
            type="text"
            {...register("price", {
              required: { value: true, message: "Price is required" },
              min: { value: 0, message: "Value must be a greater than 0" },
              max: 10000,
            })}
            placeholder="Price"
          />
          <input
            type="text"
            {...register("rating", {
              required: { value: true, message: "Rating is required" },
              min: { value: 0, message: "Value must be a greater than 0" },
              max: {
                value: 5,
                message: "Value must be a less or equal than 5",
              },
            })}
            placeholder="Rating (0-5)"
          />
          <input
            type="text"
            {...register("stock", {
              required: { value: true, message: "Stock is required" },
              min: { value: 0, message: "Value must be a greater than 0" },
              max: 100,
            })}
            placeholder="Stock"
          />
          <input
            type="text"
            {...register("image", {
              required: { value: true, message: "Image URL is required" },
            })}
            placeholder="Image URL"
          />
          {!isValid && isSubmitted && (
            <div className="form-erros-div">All fields are required</div>
          )}
          <div className="form-buttons-div">
            <button
              className="reset-button"
              type="button"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="watch-img-div">
          <img
            src={watchImage || placeholderImage}
            alt="Product image"
            width="300px"
          />
        </div>
      </form>
    </section>
  );
}

export default AddProductPage;
