import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Select from "../../components/UI/Select";

const QuestionSearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center  pl-7 py-4 bg-slate-100"
    >
      <div className="flex flex-1 gap-3">
        <Input
          className="border-gray-400 bg-white"
          type="text"
          placeholder="Search by keyword"
        />
        <Select defaultValue="All">
          <option value="All">All</option>
          <option value="Question stem">Question stem</option>
          <option value="Topic">Topic</option>
          <option value="Bottom Line">Bottom Line</option>
          <option value="Reference">Reference</option>
          <option value="Question ID">Question ID</option>
        </Select>
        <Button type="dark" className="text-[1rem]">
          Search
        </Button>
      </div>
      <div className="flex gap-3 items-center flex-1 self-stretch">
        <div className="flex self-stretch gap-3 items-center">
          <label className="font-[500] text-[1rem]">Categories</label>
          <Select
            className="flex self-stretch"
            defaultValue="Please select category"
          >
            <option disabled selected>
              Please select category
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Categoray 2">Categoray 2</option>
            <option value="Categoray 3">Categoray 3</option>
            <option value="Categoray 4">Categoray 4</option>
            <option value="Categoray 5">Categoray 5</option>
          </Select>
        </div>
        <Button type="dark" className="text-[1rem]">
          Create Test
        </Button>
      </div>
    </form>
  );
};

export default QuestionSearchForm;
