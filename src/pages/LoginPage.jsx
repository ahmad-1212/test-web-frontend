import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const LoginPage = () => {
  return (
    <div className="max-w-[1500px] min-h-screen mx-auto px-3 flex flex-col gap-6 pb-14">
      <header className="flex justify-between items-center   mt-5">
        <div>
          <img src="/logo4.png" alt="Logo" className="w-[150px]" />
        </div>
        <div className="flex gap-4 items-center">
          <p>Don't have an account?</p>
          <Button type="outlined" className="text-primary-500">
            Get Started
          </Button>
        </div>
      </header>
      <main>
        <form className="w-[500px] mx-auto shadow-xl p-10 mb-16">
          <h2 className="text-center text-4xl mt-5 mb-14">Sign In</h2>
          <div className="flex flex-col gap-2 mb-8">
            <label className="font-[600] text-[1.2rem]">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="outline-none border-2 bg-transparent px-4 py-2 rounded-md focus:border-primary-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-[600] text-[1.2rem]">Password</label>
            <input
              type="password"
              className="outline-none border-2 bg-transparent px-4 py-2 rounded-md focus:border-primary-500"
            />
          </div>
          <div className="flex justify-center mt-14">
            <Button type="primary">Sign In</Button>
          </div>
          <Link
            to="#"
            className="flex justify-center mt-3  underline text-primary-400"
          >
            Forgot Password?
          </Link>
        </form>
        <div className="flex flex-col items-center">
          <h4 className="text-2xl">Have Questions?</h4>
          <Link className="underline text-primary-500">Contact support</Link>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
