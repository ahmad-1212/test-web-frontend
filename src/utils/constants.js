import axios from "axios";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

export const NAV_LINKS = [
  {
    title: "Dashboard",
    link: "/dashboard",
    // icon: <AiOutlineHome />,
  },
  {
    title: "Create Test",
    link: "/create-test",
    // icon: <CgNotes />,
  },
  {
    title: "Question Search",
    link: "/question-search",
    // icon: <AiOutlineSearch />,
  },
];

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
