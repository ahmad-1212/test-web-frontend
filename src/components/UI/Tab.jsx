import { useState } from "react";

function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex gap-2 items-center">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`self-stretch items-center flex border-b-4 cursor-pointer px-3 border-transparent hover:border-b-primary-500 font-[500] text-[1rem] pb-2  ${
            activeTab === index && "border-b-primary-500"
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default Tab;
