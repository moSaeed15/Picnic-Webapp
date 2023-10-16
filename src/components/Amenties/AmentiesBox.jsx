import { useState } from 'react';
import AmentiesAvailable from './AmentiesAvailable';
import StageButtons from './StageButtons';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes from 'prop-types'
import HandleIncreaseDecrease from '../HandleIncreaseDecrease';
import DisabledAmenties from './DisabledAmenties';

const AmentiesBox = ({ setAmenties, disabled, language }) => {
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState(''); // Initialize the selected option state
  const handleCheckboxChange = event => {
    if (event.target.value === 'Public')
      setAmenties(prev => {
        return {
          ...prev,
          num_public_pools: 1,
        };
      });
    if (event.target.value === 'Private')
      setAmenties(prev => {
        return {
          ...prev,
          num_private_pools: 1,
        };
      });
    if (event.target.value === 'Both')
      setAmenties(prev => {
        return {
          ...prev,
          num_private_pools: 1,
          num_public_pools: 1,
        };
      });
    setSelectedOption(event.target.value); // Update the selected option when a checkbox is clicked
  };
  return (
    <>
      {!disabled ? (
        <div className="mt-5 px-5">
          <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
            <h2>{language === 'en' ? 'Amenities' : 'وسائل الراحة'}</h2>
          </div>
          <div className="grid grid-cols-2 border border-borderTable ">
            <div
              className={`grid grid-cols-2 2xl:gap-x-28  xl:gap-x-10  px-5 pt-5 gap-y-5  border-borderTable border-b ${
                language === 'en' ? 'border-r' : 'border-l'
              }`}
            >
              <StageButtons language={language} />
              <div className="flex items-center text-xs font-medium justify-self-end ">
                <span>
                  {language === 'en' ? 'First Class' : 'الدرجة الأولى'}
                </span>

                <ToggleButton language={language} />

                <span>
                  {language === 'en' ? 'Second Class' : 'الدرجة الثانية'}
                </span>
              </div>

              {location.pathname === '/chalet' && (
                <span className="text-primaryColor font-medium">
                  {language === 'en' ? 'Nearby Sea?' : 'البحر مجاور؟'}
                </span>
              )}

              {location.pathname === '/chalet' && (
                <div className="flex items-center mr-[3.35rem] text-xs mb-5  font-medium  justify-self-end ">
                  <span> {language === 'en' ? 'No' : 'لا'}</span>
                  <ToggleButton
                    amentiesName={'sea_nearby'}
                    setAmenties={setAmenties}
                    language={language}
                  />
                  <span>{language === 'en' ? 'Yes' : 'نعم'}</span>
                </div>
              )}
            </div>

            <AmentiesAvailable
              language={language}
              amentiesName={'driver_room'}
              setAmenties={setAmenties}
              text={language === 'en' ? 'Driver Room' : 'غرفة السائق'}
              borderB={'border-b'}
            />
            <HandleIncreaseDecrease
              text={language === 'en' ? 'The Number of Floors' : 'عدد الطوابق'}
              language={language}
            />

            <AmentiesAvailable
              language={language}
              setAmenties={setAmenties}
              amentiesName={'garden'}
              text={language === 'en' ? 'Garden' : 'حديقة'}
              borderB={'border-b'}
            />

            <div
              className={`grid grid-cols-1 border-b px-5 pt-5  gap-y-5   border-borderTable  pb-4 ${
                language === 'en' ? 'border-r' : 'border-l'
              }`}
            >
              <span className="text-base text-primaryColor font-medium">
                {language === 'en' ? 'The Number of Rooms' : 'عدد الغرف'}
              </span>
              <div className="flex gap-4 text-sm font-medium">
                <div className="">
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_master_bedrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Master' : 'غرفة النوم الرئيسية'}
                  </label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_single_bedrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Single' : 'غرفة نوم مفردة'}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_bathrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Bathroom' : 'حمام'}
                  </label>
                </div>
              </div>
            </div>

            <AmentiesAvailable
              language={language}
              text={language === 'en' ? 'Elevator' : 'مصعد'}
              amentiesName={'elevator'}
              setAmenties={setAmenties}
              borderB={'border-b'}
            />
            <HandleIncreaseDecrease
              text={
                language === 'en'
                  ? 'The Number of Living Rooms'
                  : 'عدد غرف المعيشة'
              }
              language={language}
            />

            <AmentiesAvailable
              text={
                language === 'en'
                  ? 'Suitable for Disabled People and The Elderly'
                  : 'مناسبة للأشخاص ذوي الإعاقة وكبار السن'
              }
              language={language}
              amentiesName={'elderly_disabled_suitable'}
              setAmenties={setAmenties}
              borderB={'border-b'}
            />
            <div
              className={`grid grid-cols-1 border-b px-5 pt-5  gap-y-5  border-borderTable pb- ${
                language === 'en' ? 'border-r' : 'border-l'
              }`}
            >
              <span className="text-base text-primaryColor font-medium">
                {language === 'en'
                  ? 'The Number of Swimming Pool'
                  : 'عدد حمامات السباحة'}
              </span>
              <div className="flex gap-4 text-sm font-medium">
                <div className="">
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    value="Private"
                    checked={selectedOption === 'Private'}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Private' : 'خاص'}
                  </label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    value="Public"
                    checked={selectedOption === 'Public'}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Public' : 'عام'}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className={` ${
                      language === 'en' ? 'mr-[7px]' : 'ml-[7px]'
                    } `}
                    value="Both"
                    checked={selectedOption === 'Both'}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">
                    {language === 'en' ? 'Both' : 'كلاهما'}
                  </label>
                </div>
              </div>
            </div>
            <AmentiesAvailable
              text={
                language === 'en'
                  ? 'Available Kitchen Utensils'
                  : 'أدوات المطبخ المتاحة'
              }
              language={language}
              amentiesName={'kitchen'}
              setAmenties={setAmenties}
              borderB={'border-b'}
            />
            <AmentiesAvailable
              text={language === 'en' ? 'Nany Room' : 'غرفة ناني'}
              language={language}
              amentiesName={'nanny_room'}
              setAmenties={setAmenties}
              border={'border-r'}
              margin={true}
            />
            <AmentiesAvailable
              text={language === 'en' ? 'Available Wifi' : 'واي فاي متاح'}
              language={language}
              amentiesName={'wifi'}
              setAmenties={setAmenties}
            />
          </div>
        </div>
      ) : (
        <DisabledAmenties
          setAmenties={setAmenties}
          disabled={disabled}
          language={language}
        />
      )}
    </>
  );
};

export default AmentiesBox;

AmentiesBox.propTypes = {
  setAmenties: PropTypes.func,
};
