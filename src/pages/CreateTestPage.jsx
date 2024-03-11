import Button from "../components/UI/Button";
import Heading from "../components/UI/Heading";
import CreateTest from "../features/CreateTest/CreateTest";

const CreateTestPage = () => {
  return (
    <section className="flex flex-col pt-8 ml-6 bg-white">
      <div className="flex justify-between px-4 border-b-2 border-gray-200 py-5 items-center">
        <h4 className="font-[500] text-[1.8rem]">Create New Test</h4>
        <div className="flex items-center gap-3">
          <Button type="outlined">Cancel</Button>
          <Button>Start Test</Button>
        </div>
      </div>
      <CreateTest />
    </section>
  );
};

export default CreateTestPage;
