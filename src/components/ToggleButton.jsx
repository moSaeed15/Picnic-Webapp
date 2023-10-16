import { useEffect, useState } from 'react';

const ToggleButton = ({
  setAmenties,
  amentiesName,
  setPricingList,
  priceName,
  priceList,
  setPriceListSelected,
  disabled,
  amenties,
  pricing_list,
  language,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const variableName = String(amentiesName);
  useEffect(() => {
    if (priceName) {
      setPriceListSelected(prev => {
        return { ...prev, [priceName]: isChecked };
      });

      if (isChecked) {
        // Handle logic when isChecked is true, e.g., add item to priceList
        setPricingList(prev => [
          ...prev,
          {
            price: priceList[priceName],
            currency: 'kwd',
            pricing_type: priceName,
          },
        ]);
      } else {
        // Handle logic when isChecked is false, e.g., remove item from priceList
        // Modify the logic based on your requirements
      }
    }
  }, [isChecked]);

  const toggleCheckbox = () => {
    if (amentiesName) {
      setAmenties(prev => {
        console.log(prev);
        return { ...prev, [variableName]: !isChecked };
      });
    }

    setIsChecked(prev => !prev);
  };

  function returnHTML() {
    if (disabled && !amenties) {
      return (
        <div className="mx-2 bg-white flex items-center  justify-center">
          <input type="checkbox" className="hidden" />
          <label
            className={`bg-toggleGrey w-12 h-6 rounded-xl cursor-pointer relative before:absolute before:bg-white
before:w-4 before:h-4 before:rounded-full before:m-1 before:duration-200  ${
              pricing_list === true && language === 'en'
                ? '[&&]:bg-secondaryColor before:translate-x-6'
                : ''
            } ${
              language === 'ar' &&
              pricing_list === true &&
              '[&&]:bg-secondaryColor before:-translate-x-6'
            }`}
          ></label>
        </div>
      );
    }

    if (!disabled) {
      return (
        <div className="mx-2 bg-white flex items-center  justify-center">
          <input type="checkbox" className="hidden" />
          <label
            onClick={toggleCheckbox}
            className={`bg-toggleGrey w-12 h-6 rounded-xl cursor-pointer relative before:absolute before:bg-white
  before:w-4 before:h-4 before:rounded-full before:m-1 before:duration-200 ${
    isChecked ? '[&&]:bg-secondaryColor' : ''
  } ${
              language === 'en' &&
              isChecked &&
              '[&&]:bg-secondaryColor before:translate-x-6'
            } ${
              language === 'ar' &&
              isChecked &&
              '[&&]:bg-secondaryColor before:-translate-x-6'
            }`}
          ></label>
        </div>
      );
    } else {
      return (
        <div className="mx-2 bg-white flex items-center  justify-center">
          <input type="checkbox" className="hidden" />
          <label
            className={`bg-toggleGrey w-12 h-6 rounded-xl cursor-pointer relative before:absolute before:bg-white
  before:w-4 before:h-4 before:rounded-full before:m-1 before:duration-200  ${
    amenties[amentiesName] === true && language === 'en'
      ? '[&&]:bg-secondaryColor before:translate-x-6'
      : ''
  } ${
              language === 'ar' &&
              amenties[amentiesName] === true &&
              '[&&]:bg-secondaryColor before:-translate-x-6'
            }`}
          ></label>
        </div>
      );
    }
  }

  return <>{returnHTML()}</>;
};

export default ToggleButton;
