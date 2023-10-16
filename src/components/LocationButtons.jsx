import { useState } from 'react';

const LocationButtons = ({
  location,
  setLocation,
  disabled,
  address,
  language,
}) => {
  const [selectedButton, setSelectedButton] = useState('Al Khiran');

  const handleButtonClick = buttonText => {
    setSelectedButton(buttonText);
    setLocation(buttonText);
  };

  return (
    <>
      {!disabled ? (
        <div className="mt-5 px-5">
          <button
            onClick={e => handleButtonClick(e.target.innerText)}
            className={`py-2 bg-tertiaryGrey  border-borderButton border-r px-4 text-textGrey  font-medium text-xs ${
              selectedButton === 'Al Khiran' &&
              '[&]:bg-primaryColor text-white '
            } ${language === 'en' ? 'rounded-l-full' : 'rounded-r-full'}`}
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
            className={`py-2 text-textGrey font-medium px-4   bg-tertiaryGrey text-xs ${
              selectedButton === 'Other' && '[&]:bg-primaryColor  text-white '
            } ${
              language === 'en' ? 'rounded-r-full' : 'rounded-l-full border-r'
            }`}
          >
            Other
          </button>
        </div>
      ) : (
        <div className="mt-5 px-5">
          <button
            className={`py-2 bg-tertiaryGrey  border-borderButton border-r px-4 text-textGrey   font-medium text-xs ${
              !disabled &&
              selectedButton === 'Al Khiran' &&
              '[&]:bg-primaryColor text-white'
            } ${address === 'Al Khiran' && '[&]:bg-primaryColor text-white'} ${
              language === 'en' ? 'rounded-l-full' : 'rounded-r-full'
            }`}
          >
            Al Khiran
          </button>
          <button
            className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
              selectedButton === 'Bnaider' && '[&]:bg-primaryColor  text-white '
            } ${address === 'Bnaider' && '[&]:bg-primaryColor text-white'} `}
          >
            Bnaider
          </button>
          <button
            className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
              selectedButton === 'Alsubiy' && '[&]:bg-primaryColor  text-white '
            }  ${address === 'Alsubiy' && '[&]:bg-primaryColor text-white'} `}
          >
            Alsubiy
          </button>
          <button
            className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
              selectedButton === 'Sabah Alahmad Sea City' &&
              '[&]:bg-primaryColor  text-white '
            }  ${
              address === 'Sabah Alahmad Sea City' &&
              '[&]:bg-primaryColor text-white'
            } `}
          >
            Sabah Alahmad Sea City
          </button>
          <button
            className={`py-2 text-textGrey font-medium px-4  bg-tertiaryGrey text-xs ${
              selectedButton === 'Other' && '[&]:bg-primaryColor  text-white '
            }  ${address === 'Other' && '[&]:bg-primaryColor text-white'} ${
              language === 'en' ? 'rounded-r-full' : 'rounded-l-full'
            } `}
          >
            Other
          </button>
        </div>
      )}
    </>
  );
};

export default LocationButtons;
