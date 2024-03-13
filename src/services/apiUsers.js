import axios from "axios";
import { API } from "../utils/constants";

export const login = async (data) => {
  try {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    // const res = await API.post("/login", data);
    console.log(res);

    return res;
  } catch (err) {
    console.log("ERROR:::", err);
  }
};

export const signup = async (data) => {
  try {
    const res = await API.post("/signup", data);
    console.log(res);
  } catch (err) {
    console.log("ERROR:::", err);
  }
};
