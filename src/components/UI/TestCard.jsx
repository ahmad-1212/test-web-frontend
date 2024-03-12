import Button from "./Button";
import Menu from "./Menu";
import StatusTag from "./StatusTag";

const TestCard = ({ name, status, numOfQuestions, score, mode }) => {
  return (
    <div className="border-2 border-gray-300 px-5 shadow-md py-4 flex flex-col gap-3 rounded-md">
      <div className="flex justify-between">
        <h4 className="text-[1.1rem] font-[600]">{name}</h4>
        <div className="flex gap-2 items-center relative">
          <Menu>
            <Menu.Toggle id="test-card" />
            <Menu.List id="test-card">
              <li className="cursor-pointer">Resume</li>
              <li className="cursor-pointer">Rename</li>
              <li className="cursor-pointer text-red-400">Delete</li>
            </Menu.List>
          </Menu>
        </div>
      </div>
      <h5>Test</h5>
      <StatusTag status={status} />
      <div className="mt-3 flex justify-between items-end text-[0.9rem] font-[500] text-gray-500">
        <div className="flex flex-col gap-1">
          <h5>Questions</h5>
          <span>{numOfQuestions}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h5>Score</h5>
          <span>{score ? score : "-"}</span>
        </div>
        <div>
          <Button className="text-[0.8rem] px-3" type="dark">
            {status === "completed" ? "View" : "Resume"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
