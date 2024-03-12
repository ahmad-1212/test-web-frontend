import { NavLink } from "react-router-dom";

const NavLinkItem = ({ navItem }) => {
  return (
    <li className="flex self-stretch items-center">
      <NavLink
        to={navItem.link}
        className={({ isActive }) =>
          isActive
            ? `flex border-b-4 border-primary-200 hover:border-primary-200 self-stretch items-center text-[1.1rem]  px-4 hover:bg-primary-200/20 font-[500]`
            : "flex border-b-4 border-transparent hover:border-primary-200 hover:bg-primary-200/20 self-stretch items-center text-[1.1rem] font-[500] px-4"
        }
      >
        <span>{navItem.icon}</span>
        <span>{navItem.title}</span>
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
