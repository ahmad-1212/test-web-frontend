const Input = ({ type, placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`outline-none border-2 bg-transparent px-4 py-2 rounded-md focus:border-primary-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
