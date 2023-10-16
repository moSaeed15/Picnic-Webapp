import { useState } from 'react';
import AmentiesAvailable from './AmentiesAvailable';
import StageButtons from './StageButtons';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';
import HandleIncreaseDecrease from '../HandleIncreaseDecrease';

const DisabledAmenties = ({ setAmenties, disabled, language }) => {
  const { type, amenities } = JSON.parse(localStorage.getItem('unit'));
  console.log();
  const selectedOption =
    amenities?.num_public_pools === 1
      ? 'Public'
      : amenities?.num_private_pools === 1
      ? 'Private'
      : amenities?.num_public_pools === 1 && amenities?.num_private_pools === 1
      ? 'Both'
      : '';
  const nearbySeaText = language === 'en' ? 'Nearby Sea?' : 'البحر مجاور؟';
  const options = {
    en: {
      floors: 'The Number of Floors',
      amenities: 'Amenities',
      firstClass: 'First Class',
      secondClass: 'Second Class',
      masterRoom: 'Master',
      singleRoom: 'Single Room',
      bathroom: 'Bathroom',
      privatePool: 'Private',
      publicPool: 'Public',
      bothPools: 'Both',
      driverRoom: 'Driver Room',
      elevator: 'Elevator',
      livingRooms: 'The Number of Living Rooms',
      suitableForDisabled: 'Suitable for Disabled People and The Elderly',
      kitchenUtensils: 'Available Kitchen Utensils',
      nannyRoom: 'Nanny Room',
      availableWifi: 'Available Wifi',
      garden: 'Garden',
    },
    ar: {
      floors: 'عدد الطوابق',
      amenities: 'وسائل الراحة',
      firstClass: 'الدرجة الأولى',
      secondClass: 'الدرجة الثانية',
      masterRoom: 'غرفة النوم الرئيسية',
      singleRoom: 'غرفة نوم مفردة',
      bathroom: 'حمام',
      privatePool: 'خاص',
      publicPool: 'عام',
      bothPools: 'كلاهما',
      driverRoom: 'غرفة السائق',
      elevator: 'مصعد',
      livingRooms: 'عدد غرف المعيشة',
      suitableForDisabled: 'مناسبة للأشخاص ذوي الإعاقة وكبار السن',
      kitchenUtensils: 'أدوات المطبخ المتاحة',
      nannyRoom: 'غرفة ناني',
      availableWifi: 'واي فاي متاح',
      garden: 'حديقة',
    },
  };
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>{options[language].amenities}</h2>
      </div>
      <div className="grid grid-cols-2 border border-borderTable ">
        <div className="grid grid-cols-2 2xl:gap-x-28  xl:gap-x-10  px-5 pt-5 gap-y-5 border-r border-borderTable border-b">
          <StageButtons language={language} />
          <div className="flex items-center text-xs font-medium justify-self-end ">
            <span>{options[language].firstClass}</span>

            <ToggleButton />

            <span>{options[language].secondClass}</span>
          </div>
          {type === 'chalet' && (
            <span className="text-primaryColor font-medium">
              {nearbySeaText}
            </span>
          )}

          {type === 'chalet' && (
            <div className="flex items-center mr-[3.35rem] text-xs mb-5  font-medium  justify-self-end ">
              <span>{options[language].no}</span>
              <ToggleButton
                disabled={disabled}
                amenties={amenities}
                language={language}
              />
              <span>{options[language].yes}</span>
            </div>
          )}
        </div>

        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'driver_room'}
          setAmenties={setAmenties}
          text={options[language].driverRoom}
          borderB={'border-b'}
        />
        <HandleIncreaseDecrease
          text={options[language].floors}
          language={language}
        />

        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          setAmenties={setAmenties}
          amentiesName={'garden'}
          text={options[language].garden}
          borderB={'border-b'}
        />

        <div className="grid grid-cols-1 border-b px-5 pt-5  gap-y-5  border-r border-borderTable  pb-4 ">
          <span className="text-base text-primaryColor font-medium">
            {options[language].rooms}
          </span>
          <div className="flex gap-4 text-sm font-medium">
            <div className="">
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                checked={amenities.num_master_bedrooms}
              />
              <label htmlFor="">{options[language].masterRoom}</label>
            </div>
            <div className="">
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                checked={amenities.num_single_bedrooms}
              />
              <label htmlFor="">{options[language].singleRoom}</label>
            </div>
            <div>
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                checked={amenities.num_bathrooms}
              />
              <label htmlFor="">{options[language].bathroom}</label>
            </div>
          </div>
        </div>

        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'elevator'}
          setAmenties={setAmenties}
          text={options[language].elevator}
          borderB={'border-b'}
        />
        <HandleIncreaseDecrease
          text={options[language].livingRooms}
          language={language}
        />

        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'elderly_disabled_suitable'}
          setAmenties={setAmenties}
          text={options[language].suitableForDisabled}
          borderB={'border-b'}
        />
        <div className="grid grid-cols-1 border-b px-5 pt-5  gap-y-5  border-r border-borderTable pb-4   ">
          <span className="text-base text-primaryColor font-medium">
            {options[language].swimmingPool}
          </span>
          <div className="flex gap-4 text-sm font-medium">
            <div className="">
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                value="Private"
                checked={selectedOption === 'Private'}
              />
              <label htmlFor="">{options[language].privatePool}</label>
            </div>
            <div className="">
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                value="Public"
                checked={selectedOption === 'Public'}
              />
              <label htmlFor="">{options[language].publicPool}</label>
            </div>
            <div>
              <input
                readOnly
                type="checkbox"
                className="mr-[7px]"
                value="Both"
                checked={selectedOption === 'Both'}
              />
              <label htmlFor="">{options[language].bothPools}</label>
            </div>
          </div>
        </div>
        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'kitchen'}
          setAmenties={setAmenties}
          text={options[language].kitchenUtensils}
          borderB={'border-b'}
        />
        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'nanny_room'}
          setAmenties={setAmenties}
          text={options[language].nannyRoom}
          border={'border-r'}
          margin={true}
        />
        <AmentiesAvailable
          language={language}
          disabled={disabled}
          amenties={amenities}
          amentiesName={'wifi'}
          setAmenties={setAmenties}
          text={options[language].availableWifi}
        />
      </div>
    </div>
  );
};

export default DisabledAmenties;
