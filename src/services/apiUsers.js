import { API } from "../utils/constants";

export const login = async (data) => {
  const res = await API.post("/login", data);
  if (res.data.Error) throw Error(res.data.Error);
  return res;
};

export const signup = async (data) => {
  try {
    console.log(data);
    const res = await API.post("/signup", data);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("ERROR:::", err);
  }
};
