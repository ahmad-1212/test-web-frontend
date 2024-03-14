import QuizHead from "./QuizHead";
import QuizQuestions from "./QuizQuestions";

const TakeQuiz = () => {
  return (
    <div className="flex flex-col mx-8 my-12">
      <QuizHead />
      <QuizQuestions />
    </div>
  );
};

export default TakeQuiz;
