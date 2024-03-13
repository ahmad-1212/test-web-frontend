import { Link } from "react-router-dom";

const Button = ({
  children,
  className = "",
  variant = "primary",
  link = false,
  to,
  disabled,
  ...props
}) => {
  const variantType = {
    outlined:
      "border-[2px] border-primary-300 hover:bg-primary-400 hover:text-white px-4 py-2 rounded-md",
    underline:
      "border-b-[2px] border-primary-500 hover:bg-primary-400 hover:text-white px-3 py-2 transition-all rounded-sm",
    primary: "bg-primary-200 py-2 px-8 rounded-md font-[500] text-[1.2rem]",
    dark: "bg-primary-400 border-2 border-primary-500 text-white py-2 px-8 rounded-md font-[500] text-[1.2rem] hover:bg-primary-400/90 transition-all",
  };

  if (link)
    return (
      <Link
        to={to}
        className={`hover:-translate-y-[1px] hover:shadow-lg active:shadow-md active:-translate-y-0 ${variantType[variant]} ${className}`}
      >
        {children}
      </Link>
    );

  return (
    <button
      {...props}
      disabled={disabled}
      className={`disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 ${variantType[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
