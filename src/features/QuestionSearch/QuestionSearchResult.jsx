import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import Select from "../../components/UI/Select";
import Table from "../../components/UI/Table";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const TABS = ["All Questions", "Selected"];

const QuestionSearchResult = () => {
  const [selectCategory, setSelectCatagoray] = useState("All Questions");
  const [checkedOptions, setCheckedOptions] = useState({
    topic: true,
    category: true,
    marked: true,
  });
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick(() => setShowMenu(false));

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedOptions({ ...checkedOptions, [id]: checked });
  };

  return (
    <>
      <div className=" h-[70px] flex justify-between items-center px-10">
        <div className="flex gap-3 self-stretch">
          {TABS.map((tb) => (
            <div
              key={tb}
              onClick={() => setSelectCatagoray(tb)}
              className={`self-stretch items-center flex border-b-4 cursor-pointer px-3 border-transparent hover:border-b-primary-500 ${
                tb === selectCategory && "border-b-primary-500"
              }`}
            >
              {tb} 0
            </div>
          ))}
        </div>
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
                    onChange={handleCheckboxChange}
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
      <Table checkedOptions={checkedOptions} tableData={[]} />
    </>
  );
};

export default QuestionSearchResult;
