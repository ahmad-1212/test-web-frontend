import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { login, isLoading } = useLogin();
  const onSubmit = (data) => {
    // Handle form submission
    login(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center text-4xl mt-5 mb-14">Create an account</h2>
      <div className="flex flex-col gap-5">
        <Input
          label="Full Name"
          type="text"
          id="name"
          placeholder="Type your name"
          register={register}
          required="Name is required!"
          error={errors.name && errors.name.message}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-5">
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
      <div className="flex flex-col gap-2">
        <Input
          label="Password"
          type="password"
          id="confirmPassword"
          required="Confirm Password is required!"
          getValues={getValues}
          error={errors.confirmPassword && errors.confirmPassword.message}
          register={register}
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-center mt-8">
        <Button disabled={isLoading} type="submit" variant="dark">
          {isLoading ? "Loading..." : "Create account"}
        </Button>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        <span> Already have an account?</span>{" "}
        <Link to="/login" className="  underline text-primary-400">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
