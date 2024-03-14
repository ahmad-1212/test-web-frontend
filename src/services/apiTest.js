import { API } from "../utils/constants";

export const createTest = async (data) => {
  try {
    console.log(data);
    const res = await API.post("/readyTest", data);
    console.log(res);

    return res;
  } catch (err) {
    console.log("ERROR:::", err);
  }
};
