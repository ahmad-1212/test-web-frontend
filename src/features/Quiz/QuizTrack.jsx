const QuizTrack = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-5 flex justify-center">
        <img src="/logo-white.svg" className="w-[150px]" />
      </div>

      <div>
        <h3 className="text-center text-[1.7rem] mt-6 font-[600]">
          Question Navigation
        </h3>
        <ul className="w-[50%] flex flex-col gap-4 mx-auto mt-4">
          <li className="flex justify-between items-center text-[1.3rem]">
            <button className="hover:bg-gray-50/10 w-[3rem] h-[3rem] font-[600] rounded-full">
              1
            </button>
            <div className="w-[1.2rem] h-[1.2rem] rounded-full border-2 border-white"></div>
          </li>
          <li className="flex justify-between items-center text-[1.3rem]">
            <button className="hover:bg-gray-50/10 w-[3rem] h-[3rem] font-[600] rounded-full">
              2
            </button>
            <div className="w-[1.2rem] h-[1.2rem] rounded-full border-2 border-white"></div>
          </li>
          <li className="flex justify-between items-center text-[1.3rem]">
            <button className="hover:bg-gray-50/10 w-[3rem] h-[3rem] font-[600] rounded-full">
              3
            </button>
            <div className="w-[1.2rem] h-[1.2rem] rounded-full border-2 border-white"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuizTrack;
