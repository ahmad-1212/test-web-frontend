import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import LoginForm from "../features/Authentication/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-[1500px] min-h-screen mx-auto px-3 flex flex-col gap-6 pb-14">
      <header className="flex justify-between items-center   mt-5">
        <div>
          <img src="/logo4.png" alt="Logo" className="w-[150px]" />
        </div>
        <div className="flex gap-4 items-center">
          <p>Don't have an account?</p>
          <Button
            link={true}
            to="/signup"
            variant="underline"
            className="text-primary-500"
          >
            Get Started
          </Button>
        </div>
      </header>
      <main>
        <LoginForm />
        <div className="flex flex-col items-center">
          <h4 className="text-2xl">Have Questions?</h4>
          <Link className="underline text-primary-500">Contact support</Link>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
