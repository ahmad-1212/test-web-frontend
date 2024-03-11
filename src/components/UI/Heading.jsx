const Heading = ({ children, className = "" }) => {
  return <h2 className={`text-[3rem] font-[200] ${className}`}>{children}</h2>;
};

export default Heading;
