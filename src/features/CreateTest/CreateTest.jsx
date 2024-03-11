const CreateTest = () => {
  return (
    <form className="py-6 flex">
      <div className="flex-1  px-5 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[1.1rem]">Name</label>
          <input
            type="text"
            className="outline-none py-2 px-3 rounded-md border-2 border-gray-500 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[1.1rem]">Number of Questions</label>
          <input
            type="text"
            className="outline-none py-2 px-3 rounded-md border-2 border-gray-500 text-black w-[50%]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[1.1rem]">Mode</label>
          <div className="flex justify-between">
            <span className="flex gap-2">
              <input type="radio" />
              <label>Timed</label>
            </span>
            <span className="flex gap-2">
              <input type="radio" />
              <label>Untimed</label>
            </span>
            <span className="flex gap-2">
              <input type="radio" />
              <label>Tutor</label>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1  px-5 border-x-2 border-gray-700">div</div>
      <div className="flex-1  px-5">div</div>
    </form>
  );
};

export default CreateTest;
