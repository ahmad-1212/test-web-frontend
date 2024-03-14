import { useMutation } from "@tanstack/react-query";
import { getSearchData as getSearchDataApi } from "../../services/apiQuestions";

export const useGetSearchData = () => {
  const { mutate: getSearchData, status } = useMutation({
    mutationFn: (keywordsList) => getSearchDataApi(keywordsList),
  });

  const isLoading = status === "pending";
  return { getSearchData, isLoading };
};
