import { useState } from 'react';

const StageButtons = () => {
  const [selectedStage, setSelectedStage] = useState(1);

  const handleStageClick = stageNumber => {
    setSelectedStage(stageNumber);
  };

  return (
    <div
      className={`flex gap-5 items-center text-base  text-primaryColor font-medium`}
    >
      Stage
      <div>
        <button
          onClick={e => handleStageClick(e.target.innerText)}
          className={`border-borderButton border-r py-2 text-textGrey  bg-tertiaryGrey px-[10px] rounded-l-md font-medium text-xs ${
            selectedStage === '1' && '[&]:bg-primaryColor text-white '
          } `}
        >
          1
        </button>
        <button
          onClick={e => handleStageClick(e.target.innerText)}
          className={`py-2 px-[10px]  bg-tertiaryGrey text-textGrey font-medium text-xs border-r border-borderButton ${
            selectedStage === '2' && '[&]:bg-primaryColor text-white'
          }`}
        >
          2
        </button>
        <button
          onClick={e => handleStageClick(e.target.innerText)}
          className={`py-2 text-textGrey font-medium px-[10px]   bg-tertiaryGrey text-xs border-r border-borderButton ${
            selectedStage === '3' && '[&]:bg-primaryColor text-white'
          }`}
        >
          3
        </button>
        <button
          onClick={e => handleStageClick(e.target.innerText)}
          className={`py-2 text-textGrey font-medium px-[10px]   bg-tertiaryGrey text-xs border-r border-borderButton ${
            selectedStage === '4' && '[&]:bg-primaryColor text-white'
          }`}
        >
          4
        </button>
        <button
          onClick={e => handleStageClick(e.target.innerText)}
          className={`py-2 text-textGrey font-medium px-[10px]  rounded-r-md bg-tertiaryGrey text-xs ${
            selectedStage === '5' && '[&]:bg-primaryColor text-white  '
          }`}
        >
          5
        </button>
      </div>
    </div>
  );
};

export default StageButtons;
