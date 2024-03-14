import DisplayQuestions from "./DisplayQuestions";
import QuestionSearchForm from "./QuestionSearchForm";

const QuestionSearch = () => {
  return (
    <div className="w-full bg-white ml-5 border-l-2 border-gray-300">
      <section className=" bg-slate-200">
        <div className="pl-7 py-6 border-b-2">
          <h5 className="font-[500] text-[1.8rem]">Question Search</h5>
          <p>
            Select questions from multiple searches to create a combined test
          </p>
        </div>
        <QuestionSearchForm />
        <DisplayQuestions />
      </section>
    </div>
  );
};

export default QuestionSearch;
