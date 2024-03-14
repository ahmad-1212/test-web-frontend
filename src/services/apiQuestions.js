import { API } from "../utils/constants";

export const getSearchData = async (keywordsList) => {
  try {
    console.log(keywordsList);
    const res = await API.post("/questionSearch", {
      username: localStorage.getItem("username"),
      keywordsList,
    });

    return res.data;
  } catch (err) {
    console.log("ERROR::", err);
  }
};
