const Avatar = ({ src = "/demo-img.jpg" }) => {
  return (
    <div className="w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer">
      <img src={src} alt="User Image" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
