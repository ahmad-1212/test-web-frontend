import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Handle form submission
    login(data, {
      onSuccess: (data) => {
        localStorage.setItem("username", data.data.username);
        navigate("/");
      },
      onError: () => {
        setError("email", {
          type: "email",
          message: "Invalid email or password",
        });
        setError("password", {
          type: "password",
          message: "",
        });
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center text-4xl mt-5 mb-14">Sign In</h2>
      <div className="flex flex-col gap-2">
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="name@example.com"
          register={register}
          required="Email is required!"
          error={errors.email && errors.email.message}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          label="Password"
          type="password"
          id="password"
          required="Password is required!"
          error={errors.password && errors.password.message}
          register={register}
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-center mt-14">
        <Button
          disabled={isLoading}
          variant="dark"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          {isLoading ? "Loading..." : "Sign In"}
        </Button>
      </div>
      <Link
        to="#"
        className="flex justify-center mt-3  underline text-primary-400"
      >
        Forgot Password?
      </Link>
    </form>
  );
};

export default LoginForm;
