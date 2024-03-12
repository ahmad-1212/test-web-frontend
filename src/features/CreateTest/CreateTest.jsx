import Button from "../../components/UI/Button";
import CreateTestForm from "./CreateTestForm";

const CreateTest = () => {
  return (
    <>
      <div className="flex justify-between px-4 border-b-2 border-gray-200 py-5 items-center">
        <h4 className="font-[500] text-[1.8rem]">Create New Test</h4>
        <div className="flex items-center gap-3">
          <Button type="outlined" className="text-[1rem]">
            Cancel
          </Button>
          <Button type="dark" className="text-[1rem]">
            Start Test
          </Button>
        </div>
      </div>
      <CreateTestForm />
    </>
  );
};

export default CreateTest;
