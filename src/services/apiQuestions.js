import { API } from "../utils/constants";

export const getSearchData = async () => {
  try {
    const res = await API.post("/questionSearch");

    return res.data;
  } catch (err) {
    console.log("ERROR::", err);
  }
};
