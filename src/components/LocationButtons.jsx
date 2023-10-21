import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const LocationButtons = ({
  location,
  setLocation,
  disabled,
  address,
  language,
  arabic,
}) => {
  const [selectedButton, setSelectedButton] = useState('Al Khiran');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API_PATH
        }/api/v1/utility/locations/?country=Kuwait&level_filter=address`
      );
      const data = await response.json();
      const cities = data.map(city => {
        return {
          english: city.name,
          arabic: city.name_l1,
          longitude: city.longitude,
          _id: city._id,
          latitude: city.latitude,
        };
      });
      setCities(cities);
    };
    getCities();
  }, []);

  const handleButtonClick = buttonText => {
    const cityData = cities.find(city => city.english === buttonText.english);
    console.log(cities);
    setSelectedButton(buttonText.english);
    setLocation({
      ...cityData,
      english: buttonText.english,
      arabic: buttonText.arabic,
    });
  };
  return (
    <>
      {!disabled ? (
        <div className="mt-5 px-5">
          <button
            onClick={e =>
              handleButtonClick({ english: 'Al Khiran', arabic: 'الخيران' })
            }
            className={`py-2 bg-tertiaryGrey  border-borderButton border-r px-4 text-textGrey  font-medium text-xs ${
              selectedButton === 'Al Khiran' &&
              '[&]:bg-primaryColor text-white '
            } ${language === 'en' ? 'rounded-l-full' : 'rounded-r-full'}`}
          >
            {language === 'en' ? 'Al Khiran' : 'الخيران'}
          </button>
          <button
            onClick={e =>
              handleButtonClick({ english: 'Bnaider', arabic: 'بنيدر' })
            }
            className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
              selectedButton === 'Bnaider' && '[&]:bg-primaryColor  text-white '
            }`}
          >
            {language === 'en' ? 'Bnaider' : 'بنيدر'}
          </button>
          <button
            onClick={e =>
              handleButtonClick({ english: 'Alsubiy', arabic: 'الصبية' })
            }
            className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
              selectedButton === 'Alsubiy' && '[&]:bg-primaryColor  text-white '
            }`}
          >
            {language === 'en' ? 'Alsubiy' : 'الصبية'}
          </button>
          <button
            onClick={e =>
              handleButtonClick({
                english: 'Sabah Alahmad Sea City',
                arabic: 'مدينة صباح الأحمد البحرية',
              })
            }
            className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
              selectedButton === 'Sabah Alahmad Sea City' &&
              '[&]:bg-primaryColor  text-white '
            }`}
          >
            {language === 'en'
              ? 'Sabah Alahmad Sea City'
              : 'مدينة صباح الأحمد البحرية'}
          </button>

          <Menu>
            <MenuButton
              className={`py-2 text-textGrey font-medium px-4   bg-tertiaryGrey text-xs ${
                selectedButton === 'Other' && '[&]:bg-primaryColor  text-white '
              } ${
                language === 'en' ? 'rounded-r-full' : 'rounded-l-full border-r'
              }`}
            >
              {language === 'en' ? 'Other' : 'آخر'}
            </MenuButton>
            <MenuList>
              {cities.map((city, i) => (
                <MenuItem
                  key={i}
                  onClick={e =>
                    handleButtonClick({
                      english: city.english,
                      arabic: city.arabic,
                    })
                  }
                  bg={`${selectedButton === city.english && 'teal'}`}
                  color={`${selectedButton === city.english && 'white'}`}
                >
                  {language === 'en' ? city.english : city.arabic}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
            {language === 'en' ? 'Al Khiran' : 'الخيران'}
          </button>
          <button
            className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
              selectedButton === 'Bnaider' && '[&]:bg-primaryColor  text-white '
            } ${address === 'Bnaider' && '[&]:bg-primaryColor text-white'} `}
          >
            {language === 'en' ? 'Bnaider' : 'بنيدر'}
          </button>
          <button
            className={`py-2 text-textGrey font-medium px-4 border-borderButton border-r bg-tertiaryGrey text-xs ${
              selectedButton === 'Alsubiy' && '[&]:bg-primaryColor  text-white '
            }  ${address === 'Alsubiy' && '[&]:bg-primaryColor text-white'} `}
          >
            {language === 'en' ? 'Alsubiy' : 'الصبية'}
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
            {language === 'en'
              ? 'Sabah Alahmad Sea City'
              : 'مدينة صباح الأحمد البحرية'}{' '}
          </button>
          <Menu>
            <MenuButton
              className={`py-2 text-textGrey font-medium px-4   bg-tertiaryGrey text-xs ${
                selectedButton === 'Other' && '[&]:bg-primaryColor  text-white '
              } ${
                language === 'en' ? 'rounded-r-full' : 'rounded-l-full border-r'
              }`}
            >
              {language === 'en' ? 'Other' : 'آخر'}
            </MenuButton>
            <MenuList>
              {cities.map((city, i) => (
                <MenuItem
                  key={i}
                  onClick={e =>
                    handleButtonClick({
                      english: city.english,
                      arabic: city.arabic,
                    })
                  }
                  bg={`${
                    (address === city.english || arabic === city.arabic) &&
                    'teal'
                  }`}
                  color={`${
                    (address === city.english || arabic === city.arabic) &&
                    'white'
                  }`}
                >
                  {language === 'en' ? city.english : city.arabic}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      )}
    </>
  );
};

export default LocationButtons;
