import NavLinks from "../Nav/NavLinks";
import Avatar from "../UI/Avatar";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md flex items-center justify-between px-16 h-[70px]">
      <NavLinks />
      <Avatar />
    </header>
  );
};

export default Header;
