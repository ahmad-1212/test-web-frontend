import QuestionSearchForm from "./QuestionSearchForm";
import QuestionSearchResult from "./QuestionSearchResult";

const QuestionSearch = () => {
  return (
    <div className="w-full ml-5 border-l-2 border-gray-300">
      <section className=" bg-slate-200">
        <div className="pl-7 py-6 border-b-2">
          <h5 className="font-[500] text-[1.8rem]">Question Search</h5>
          <p>
            Select questions from multiple searches to create a combined test
          </p>
        </div>
        <QuestionSearchForm />
      </section>
      <section className="bg-white">
        <QuestionSearchResult />
      </section>
    </div>
  );
};

export default QuestionSearch;
