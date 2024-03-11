import { useState } from "react";
import Button from "../../components/UI/Button";

const TEST_TYPES = ["timed", "untimed", "tutor"];

const CreateQuickTestForm = () => {
  const [questionType, setQuestionType] = useState("timed");

  // Styles
  const labelClasses = "font-[500] text-xl";
  const inputClasses =
    " outline-none py-2 px-3 rounded-md border-2 border-transparent focus:border-primary-200 text-black";
  const inputCheckboxClasses =
    "h-5 w-5 text-primary-300 transition duration-150 ease-in-out cursor-pointer";

  return (
    <>
      <form className="flex flex-col gap-7 h-[70%] w-full px-4 overflow-y-auto scrollbare">
        {/* Test Name */}
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Test Name</label>
          <input type="text" className={inputClasses} />
        </div>
        {/* Test type */}
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Test Type</label>
          <ul className="flex bg-white text-black rounded-md overflow-hidden text-[0.9rem]">
            {TEST_TYPES.map((typ) => (
              <li
                key={typ}
                onClick={() => setQuestionType(typ)}
                className={`py-2 px-3 flex-1 hover:bg-primary-400 hover:text-white cursor-pointer ${
                  typ === questionType && "bg-primary-400 text-white"
                }`}
              >
                {typ}
              </li>
            ))}
          </ul>
        </div>

        {/* Number of Questons */}
        <div className="flex flex-col gap-2">
          <label className={labelClasses}>Number of Questions</label>
          <input
            type="number"
            className=" outline-none py-2 px-3 rounded-md border-2 border-transparent focus:border-primary-200 text-black"
          />
        </div>

        {/* Question type */}
        <div className="flex flex-col gap-4">
          <label className={labelClasses}>Question Type</label>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input type="checkbox" className={inputCheckboxClasses} />
              <label>New</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className={inputCheckboxClasses} />
              <label>Used</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className={inputCheckboxClasses} />
              <label>Incorrect</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className={inputCheckboxClasses} />
              <label>Marked</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className={inputCheckboxClasses} />
              <label>Skipped</label>
            </div>
          </div>
        </div>
        <Button
          className="border-2 border-white rounded-3xl hover:border-white"
          type="outlined"
        >
          Create
        </Button>
      </form>
    </>
  );
};

export default CreateQuickTestForm;
