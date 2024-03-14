import { useState } from "react";
import Button from "../../components/UI/Button";
import Select from "../../components/UI/Select";
import SimpleInput from "../../components/UI/SimpleInput";
import { useGetSearchData } from "./useGetSearchData";
import { useSearchResultContext } from "../../context/SearchResultContext";

const QuestionSearchForm = () => {
  const { setData } = useSearchResultContext();
  const { getSearchData, isLoading } = useGetSearchData();
  const [keyword, setKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keywordsList = keyword.split(" ");
    getSearchData(keywordsList, {
      onSuccess: (data) => {
        setData(data.questions);
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center  pl-7 py-4 bg-slate-100"
    >
      <div className="flex flex-1 gap-3">
        <SimpleInput
          className="bg-white"
          type="text"
          placeholder="Search by keyword"
          onChange={handleKeywordChange}
        />
        <Select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Question stem">Question stem</option>
          <option value="Topic">Topic</option>
          <option value="Bottom Line">Bottom Line</option>
          <option value="Reference">Reference</option>
          <option value="Question ID">Question ID</option>
        </Select>
        <Button
          disabled={!keyword || isLoading}
          variant="dark"
          className="text-[1rem]"
        >
          Search
        </Button>
      </div>
      <div className="flex gap-3 items-center flex-1 self-stretch">
        <div className="flex self-stretch gap-3 items-center">
          <label className="font-[500] text-[1rem]">Categories</label>
          <Select className="flex self-stretch">
            <option disabled selected>
              Please select category
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Categoray 2">Categoray 2</option>
            <option value="Categoray 3">Categoray 3</option>
            <option value="Categoray 4">Categoray 4</option>
            <option value="Categoray 5">Categoray 5</option>
          </Select>
        </div>
        <Button
          disabled={!keyword || isLoading}
          type="button"
          variant="dark"
          className="text-[1rem]"
        >
          Create Test
        </Button>
      </div>
    </form>
  );
};

export default QuestionSearchForm;
