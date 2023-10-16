import { useState } from 'react';

const HandleIncreaseDecrease = ({ text, language }) => {
  const [floorNumber, setFloorNumber] = useState(1);

  const handleDecrease = () => {
    if (floorNumber > 1) setFloorNumber(floorNumber - 1);
  };

  const handleIncrease = () => {
    setFloorNumber(floorNumber + 1);
  };

  return (
    <div
      className={`grid grid-cols-2 px-5 pt-5 gap-y-5 border-b  border-borderTable ${
        language === 'en' ? 'border-r' : 'border-l'
      }`}
    >
      <span className="text-base  text-primaryColor font-medium">{text}</span>
      <div className="justify-self-end mr-16 mb-3 ">
        <span
          onClick={handleDecrease}
          className={` px-2 py-1 bg-secondaryColor cursor-pointer  rounded-l-[4px]  text-white ${
            language === 'en' ? 'rounded-l-[4px]' : 'rounded-r-[4px]'
          }`}
        >
          -
        </span>
        <span className="px-2 py-[3px] border border-greyNumber">
          {floorNumber}
        </span>
        <span
          onClick={handleIncrease}
          className={` px-2 py-1 bg-secondaryColor cursor-pointer    text-white ${
            language === 'en' ? 'rounded-r-[4px]' : 'rounded-l-[4px]'
          }`}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default HandleIncreaseDecrease;
