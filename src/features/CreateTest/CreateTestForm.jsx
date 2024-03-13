import Select from "../../components/UI/Select";

const CreateTestForm = () => {
  return (
    <form className="py-6 w-[500px] mx-auto justify-center border-2 border-gray-200 mt-5 rounded-md ">
      <div className="flex-1  px-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[1.1rem]">Name</label>
          <input
            type="text"
            className="outline-none border-2 px-4 py-2 rounded-md  bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[1.1rem]">Number of Questions</label>
          <input
            type="number"
            min={1}
            className=" w-[30%] outline-none border-2 px-4 py-2 rounded-md  bg-transparent"
          />
        </div>
        {/* Question State */}
        <div className="flex gap-7">
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="new"
              className="w-[1.1rem] h-[1.1rem] accent-primary-400/90"
            />
            <label htmlFor="new">New</label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              id="used"
              className="w-[1.1rem] h-[1.1rem] accent-primary-400/90"
            />
            <label htmlFor="used">Used</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="marked"
              className="w-[1.1rem] h-[1.1rem] accent-primary-400/90"
            />
            <label htmlFor="marked">Marked</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              id="incorrect"
              className="w-[1.1rem] h-[1.1rem] accent-primary-400/90"
            />
            <label htmlFor="incorrect">Incorrect</label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label>Number of Times missed</label>
          <Select className="py-2 px-4">
            <option value="1+">1+</option>
            <option value="2+">2+</option>
            <option value="3+">3+</option>
            <option value="4+">4+</option>
            <option value="5+">5+</option>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <label>Answer Options</label>
          <Select className="py-2 px-4">
            <option value="All">All</option>
            <option value="3 options">3 options</option>
            <option value="4+ options">4+ options</option>
          </Select>
        </div>
      </div>
    </form>
  );
};

export default CreateTestForm;
