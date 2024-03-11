import Button from "../../components/UI/Button";

const QuestionSearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 pl-7 py-4 bg-slate-100">
      <input
        type="text"
        placeholder="Search by keyword"
        className="px-4 py-2 outline-none border-2 border-gray-300 rounded-md focus:border-primary-400 "
      />
      <select className="outline-none border-2 border-gray-300 focus:border-primary-400 rounded-md">
        <option>All</option>
        <option value="Question stem">Question stem</option>
        <option value="Topic">Topic</option>
        <option value="Bottom Line">Bottom Line</option>
        <option value="Reference">Reference</option>
        <option value="Question ID">Question ID</option>
      </select>
      <Button type="dark">Search</Button>
      <div className="ml-3 flex gap-3 items-center">
        <label className="font-[500] text-[1rem]">Categories</label>
        <select className="outline-none flex self-stretch border-2 border-gray-300 focus:border-primary-400 rounded-md">
          <option disabled selected>
            Please select category
          </option>
          <option value="Category 1">Category 1</option>
          <option value="Categoray 2">Categoray 2</option>
          <option value="Categoray 3">Categoray 3</option>
          <option value="Categoray 4">Categoray 4</option>
          <option value="Categoray 5">Categoray 5</option>
        </select>
      </div>
      <Button type="dark">Create Test</Button>
    </form>
  );
};

export default QuestionSearchForm;
