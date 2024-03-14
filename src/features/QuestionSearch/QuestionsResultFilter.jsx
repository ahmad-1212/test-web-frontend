import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import Select from "../../components/UI/Select";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useSearchResultContext } from "../../context/SearchResultContext";
import { useSearchParams } from "react-router-dom";

const QuestionsResultFilter = ({ onCheckboxChange, checkedOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick(() => setShowMenu(false));
  const { state } = useSearchResultContext();

  const handleSelectedOption = (opt) => {
    searchParams.set("questions", opt);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    searchParams.set("questions", "allQuestions");
    setSearchParams(searchParams);
  }, []);

  return (
    <div className=" h-[70px] flex justify-between items-center px-10">
      <div className="flex gap-4 self-stretch items-center ">
        <div
          className={`${
            searchParams.get("questions") === "allQuestions"
              ? "border-primary-500"
              : " border-transparent"
          } text-[1.1rem] font-[500] hover:border-primary-500 cursor-pointer border-b-4 pb-2`}
          onClick={() => handleSelectedOption("allQuestions")}
        >
          All Questions {state.searchResults.length}
        </div>
        <div
          onClick={() => handleSelectedOption("selected")}
          className={`${
            searchParams.get("questions") === "selected"
              ? "border-primary-500"
              : " border-transparent"
          } text-[1.1rem] font-[500] hover:border-primary-500 cursor-pointer border-b-4 pb-2`}
        >
          Selected {state.selectedData.length}
        </div>
      </div>

      {/* Select Columns to show */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-[15rem] text-start border-2 py-2 px-3 rounded-md flex justify-between items-center"
          >
            <span>Select Columns</span>
            <span>
              <IoChevronDownOutline />
            </span>
          </button>
          {showMenu && (
            <ul
              ref={ref}
              className="absolute bottom-0 translate-y-full w-[15rem] shadow-lg bg-white rounded-md flex flex-col py-2"
            >
              <li className="flex items-center gap-3 cursor-pointer hover:bg-primary-200  px-3 py-2">
                <input
                  className="w-[1.1rem] h-[1.1rem] accent-primary-500"
                  type="checkbox"
                  checked={checkedOptions.questionid}
                  id="questionid"
                  disabled
                />
                <label
                  htmlFor="questionid"
                  className="text-[1.1rem] flex-1 cursor-pointer"
                >
                  Question ID
                </label>
              </li>
              <li className="flex items-center gap-3 hover:bg-primary-200  px-3 py-2">
                <input
                  onChange={onCheckboxChange}
                  className="w-[1.1rem] h-[1.1rem] accent-primary-500"
                  type="checkbox"
                  checked={checkedOptions.topic}
                  id="topic"
                />
                <label
                  htmlFor="topic"
                  className="text-[1.1rem] flex-1 cursor-pointer"
                >
                  Topic
                </label>
              </li>
              <li className="flex items-center gap-3 hover:bg-primary-200  px-3 py-2">
                <input
                  onChange={onCheckboxChange}
                  className="w-[1.1rem] h-[1.1rem] accent-primary-500"
                  type="checkbox"
                  checked={checkedOptions.category}
                  id="category"
                />
                <label
                  htmlFor="category"
                  className="text-[1.1rem] flex-1 cursor-pointer"
                >
                  Category
                </label>
              </li>
              <li className="flex items-center gap-3 hover:bg-primary-200  px-3 py-2">
                <input
                  onChange={onCheckboxChange}
                  className="w-[1.1rem] h-[1.1rem] accent-primary-500"
                  type="checkbox"
                  id="marked"
                  checked={checkedOptions.marked}
                />
                <label
                  htmlFor="marked"
                  className="text-[1.1rem] flex-1 cursor-pointer"
                >
                  Marked
                </label>
              </li>
            </ul>
          )}
        </div>
        <Select className="self-stretch" defaultValue="subject">
          <option value="subject">Subject</option>
        </Select>
      </div>
    </div>
  );
};

export default QuestionsResultFilter;
