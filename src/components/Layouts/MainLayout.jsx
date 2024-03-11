import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebare from "../Sidebare/Sidebare";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebare />

      <div className="flex-1 overflow-y-auto">
        <Header />

        <main className="main">{<Outlet /> || children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
