const Button = ({ children, className = "", type = "primary" }) => {
  const variant = {
    outlined:
      "border-[2px] py-2 px-4 rounded-md border-primary-200 font-[500] text-[1rem] hover:bg-gray-100/50  hover:border-gray-500/50 transition-all",
    primary: "bg-primary-200 py-2 px-8 rounded-md font-[500] text-[1.2rem]",
    dark: "bg-primary-400 text-white py-2 px-8 rounded-md font-[500] text-[1.2rem]",
  };

  return (
    <button className={`${variant[type]} ${className}`}>{children}</button>
  );
};

export default Button;
