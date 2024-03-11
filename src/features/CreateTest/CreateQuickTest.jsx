import Heading from "../../components/UI/Heading";
import CreateQuickTestForm from "./CreateQuickTestForm";

const CreateQuickTest = () => {
  return (
    <div className="h-full px-3 flex gap-5 flex-col items-center">
      <div className="mt-5 flex">
        <img src="/logo.png" className="w-[150px]" />
      </div>
      <Heading className="font-[700] text-[2rem]">Quick quiz</Heading>
      <CreateQuickTestForm />
    </div>
  );
};

export default CreateQuickTest;
