import QuestionSearchForm from "./QuestionSearchForm";

const QuestionSearch = () => {
  return (
    <>
      <section className="w-full ml-5 border-l-2 border-gray-700 bg-gray-100">
        <div className="pl-7 py-6 border-b-2">
          <h5 className="font-[500] text-[1.1rem]">Question Search</h5>
          <p>
            Select questions from multiple searches to create a combined test
          </p>
        </div>
        <QuestionSearchForm />
      </section>
    </>
  );
};

export default QuestionSearch;
