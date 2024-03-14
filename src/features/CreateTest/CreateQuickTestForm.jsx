import { useRef, useState } from "react";
import Button from "../../components/UI/Button";
import { useCreateTest } from "./useCreateTest";
import { useNavigate } from "react-router-dom";

const TEST_TYPES = ["timed", "untimed", "tutor"];

const CreateQuickTestForm = () => {
  const [questionType, setQuestionType] = useState("timed");
  const [checkedOptions, setCheckedOptions] = useState({
    New: false,
    Correct: false,
    Incorrect: false,
  });
  const [error, setError] = useState(null);
  const testNameRef = useRef();
  const numOfQuestionsRef = useRef();
  const { createTest, isLoading } = useCreateTest();
  const navigate = useNavigate();

  const handleCheckbox = (e) => {
    setError(null);
    const { name, checked } = e.target;
    setCheckedOptions({ ...checkedOptions, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionType = Object.keys(checkedOptions).filter(
      (typ) => checkedOptions[typ]
    );

    if (!questionType.length) {
      return setError("Please select Question Type");
    }

    const data = {
      username: localStorage.getItem("username"),
      testName: testNameRef.current.value,
      questionsCount: +numOfQuestionsRef.current.value,
      questionStateList: questionType,
    };
    createTest(data, {
      onSuccess: () => navigate("/take-quiz"),
    });
  };

  // Styles
  const labelClasses = "font-[500] text-xl";
  const inputClasses =
    " outline-none py-2 px-3 rounded-md border-2 border-transparent focus:border-primary-200 text-black";

  const inputCheckboxClasses =
    "h-5 w-5 text-primary-300 transition duration-150 ease-in-out cursor-pointer accent-primary-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 h-[70%] w-full px-4 overflow-y-auto scrollbar pb-6"
    >
      {/* Test Name */}
      <div className="flex flex-col gap-2">
        <label className={labelClasses}>Test Name</label>
        <input
          ref={testNameRef}
          type="text"
          required
          className={inputClasses}
        />
      </div>
      {/* Test type */}
      <div className="flex flex-col gap-2">
        <label className={labelClasses}>Test Type</label>
        <ul className="flex  text-black rounded-md overflow-hidden text-[0.9rem]">
          {TEST_TYPES.map((typ) => (
            <li
              key={typ}
              onClick={() => setQuestionType(typ)}
              className={`py-2 px-3 flex-1   cursor-pointer ${
                typ === questionType
                  ? "bg-primary-400 text-white"
                  : "bg-white hover:bg-gray-200"
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
          ref={numOfQuestionsRef}
          type="number"
          required
          min={1}
          className=" outline-none py-2 px-3 rounded-md border-2 border-transparent focus:border-primary-200 text-black"
        />
      </div>

      {/* Question type */}
      <div className="flex flex-col gap-4">
        <label className={labelClasses}>Question Type</label>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              name="New"
              type="checkbox"
              onChange={handleCheckbox}
              checked={checkedOptions.New}
              className={inputCheckboxClasses}
            />
            <label>New</label>
          </div>
          <div className="flex gap-2">
            <input
              name="Correct"
              type="checkbox"
              onChange={handleCheckbox}
              checked={checkedOptions.Correct}
              className={inputCheckboxClasses}
            />
            <label>Correct</label>
          </div>
          <div className="flex gap-2">
            <input
              name="Incorrect"
              type="checkbox"
              onChange={handleCheckbox}
              checked={checkedOptions.Incorrect}
              className={inputCheckboxClasses}
            />
            <label>Incorrect</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {error && (
          <span className="text-red-500/90 text-[0.8rem] text-center">
            {error}
          </span>
        )}
        <Button
          className="border-2 border-white rounded-3xl hover:border-white"
          variant="outlined"
          type="submit"
          disabled={isLoading}
        >
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateQuickTestForm;
