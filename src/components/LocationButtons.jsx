import { useState } from 'react';

const LocationButtons = ({ location, setLocation }) => {
  const [selectedButton, setSelectedButton] = useState('Al Khiran');

  const handleButtonClick = buttonText => {
    setSelectedButton(buttonText);
    setLocation(buttonText);
  };

  return (
    <div className="mt-5 px-5">
      <button
        onClick={e => handleButtonClick(e.target.innerText)}
        className={`py-2 bg-tertiaryGrey  border-borderButton border-r px-4 text-textGrey  rounded-l-full font-medium text-xs ${
          selectedButton === 'Al Khiran' && '[&]:bg-primaryColor text-white '
        }`}
      >
        Al Khiran
      </button>
      <button
        onClick={e => handleButtonClick(e.target.innerText)}
        className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
          selectedButton === 'Bnaider' && '[&]:bg-primaryColor  text-white '
        }`}
      >
        Bnaider
      </button>
      <button
        onClick={e => handleButtonClick(e.target.innerText)}
        className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
          selectedButton === 'Alsubiy' && '[&]:bg-primaryColor  text-white '
        }`}
      >
        Alsubiy
      </button>
      <button
        onClick={e => handleButtonClick(e.target.innerText)}
        className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
          selectedButton === 'Sabah Alahmad Sea City' &&
          '[&]:bg-primaryColor  text-white '
        }`}
      >
        Sabah Alahmad Sea City
      </button>
      <button
        onClick={e => handleButtonClick(e.target.innerText)}
        className={`py-2 text-textGrey font-medium px-4  rounded-r-full bg-tertiaryGrey text-xs ${
          selectedButton === 'Other' && '[&]:bg-primaryColor  text-white '
        }`}
      >
        Other
      </button>
    </div>
  );
};

export default LocationButtons;
