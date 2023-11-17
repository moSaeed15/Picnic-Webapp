import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const NumberOfRoom = ({ language, amenities, setAmenties }) => {
  const handleInputChange = (field, value) => {
    setAmenties(prev => ({
      ...prev,
      [field]: +value,
    }));
  };

  const [isChecked, setIsChecked] = useState({
    master_bedrooms: 0,
    single_bedrooms: 0,
    bathrooms: 0,
  });
  return (
    <div
      className={`grid grid-cols-1 border-b px-5 pt-5  gap-y-5   border-borderTable  pb-4 ${
        language === 'en' ? 'border-r' : 'border-l'
      }`}
    >
      <span className="text-base text-primaryColor font-medium">
        {language === 'en' ? 'The Number of Rooms' : 'عدد الغرف'}
      </span>
      <div className="flex gap-4 text-sm font-medium">
        <div className="flex flex-col">
          <div className="">
            <input
              type="checkbox"
              className={` ${language === 'en' ? 'mr-[7px]' : 'ml-[7px]'} `}
              onChange={e =>
                setIsChecked(prev => {
                  return {
                    ...prev,
                    master_bedrooms: e.target.checked ? 1 : 0,
                  };
                })
              }
            />
            <label htmlFor="">
              {language === 'en' ? 'Master' : 'غرفة النوم الرئيسية'}
            </label>
          </div>
          {isChecked.master_bedrooms === 1 && (
            <Input
              display="block"
              htmlSize={10}
              width="auto"
              size="xs"
              type="number"
              placeholder="Enter number"
              onChange={e =>
                handleInputChange('num_master_bedrooms', e.target.value)
              }
            />
          )}
        </div>
        <div className="flex flex-col">
          <div className="">
            <input
              type="checkbox"
              className={` ${language === 'en' ? 'mr-[7px]' : 'ml-[7px]'} `}
              onChange={e =>
                setIsChecked(prev => {
                  return {
                    ...prev,
                    single_bedrooms: e.target.checked ? 1 : 0,
                  };
                })
              }
            />
            <label htmlFor="">
              {language === 'en' ? 'Single' : 'غرفة نوم مفردة'}
            </label>
            {isChecked.single_bedrooms === 1 && (
              <Input
                display="block"
                htmlSize={10}
                width="auto"
                size="xs"
                type="number"
                placeholder="Enter number"
                onChange={e =>
                  handleInputChange('num_single_bedrooms', e.target.value)
                }
              />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <input
              type="checkbox"
              className={` ${language === 'en' ? 'mr-[7px]' : 'ml-[7px]'} `}
              onChange={e =>
                setIsChecked(prev => {
                  return {
                    ...prev,
                    bathrooms: e.target.checked ? 1 : 0,
                  };
                })
              }
            />
            <label htmlFor="">{language === 'en' ? 'Bathroom' : 'حمام'}</label>
          </div>{' '}
          {isChecked.bathrooms === 1 && (
            <Input
              display="block"
              htmlSize={10}
              width="auto"
              size="xs"
              type="number"
              placeholder="Enter number"
              onChange={e => handleInputChange('num_bathrooms', e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NumberOfRoom;
