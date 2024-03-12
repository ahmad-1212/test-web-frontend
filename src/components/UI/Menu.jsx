import { createContext, useContext, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useOutsideClick } from "../../hooks/useOutsideClick";

const MenusContext = createContext();

function Menu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    setPosition({
      x: 0,
      y: rect.height,
    });

    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <HiOutlineDotsVertical
      className="text-[1.1rem] cursor-pointer"
      onClick={handleClick}
    />
  );
}

function List({ id, children, className = "" }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return (
    <ul
      className={`absolute w-[180px] bg-white shadow-md flex flex-col gap-1 bottom-0 translate-y-full px-5 py-3 right-0 border-2 rounded-md z-10 ${className}`}
      ref={ref}
      position={position}
    >
      {children}
    </ul>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li onClick={handleClick}>
      <div>
        {icon}
        <span>{children}</span>
      </div>
    </li>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
