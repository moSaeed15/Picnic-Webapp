import { useEffect, useState } from 'react';

const RestButtons = ({ setLocation, language, disabled }) => {
  const [selectedButton, setSelectedButton] = useState('Kabed');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_API_PATH
        }/api/v1/utility/locations/?country=Kuwait&level_filter=address`
      );

      const data = await response.json();

      const filteredCities = data
        .filter(city => {
          return city.name === 'Kabed' || city.name === 'Al Wafra';
        })
        .map(city => ({
          english: city.name,
          arabic: city.name_l1,
          longitude: city.longitude,
          _id: city._id,
          latitude: city.latitude,
        }));
      setCities(filteredCities);
    };
    getCities();
    if (!disabled)
      setLocation({
        english: 'Kabed',
        arabic: 'الكبد',
        latitude: 28.9181,
        longitude: 48.1117,
        _id: '20',
      });
  }, []);

  const getRoundedCornerClass = (language, index, length) => {
    if (language === 'en') {
      if (index === 0) {
        return 'rounded-l-full';
      } else if (index === length - 1) {
        return 'rounded-r-full';
      }
    } else if (language === 'ar') {
      if (index === 0) {
        return 'rounded-r-full';
      } else if (index === length - 1) {
        return 'rounded-l-full';
      }
    }
    return '';
  };

  const handleButtonClick = buttonText => {
    const cityData = cities.find(city => city.english === buttonText.english);
    setSelectedButton(buttonText.english);
    setLocation({
      ...cityData,
      english: buttonText.english,
      arabic: buttonText.arabic,
    });
  };

  return (
    <div className="mt-5 px-5">
      {!disabled ? (
        <div>
          {cities.map((city, index) => (
            <button
              key={index}
              onClick={() => {
                handleButtonClick(city);
              }}
              className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
                selectedButton === city.english &&
                '[&]:bg-primaryColor text-white'
              }  ${getRoundedCornerClass(language, index, cities.length)}
               ${index !== cities.length - 1 && 'mb-2'}`}
            >
              {language === 'en' ? city.english : city.arabic}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {cities.map((city, index) => (
            <button
              key={index}
              disabled
              className={`py-2 px-4 bg-tertiaryGrey border-borderButton border-r text-textGrey font-medium text-xs ${
                selectedButton === city.english &&
                '[&]:bg-primaryColor text-white'
              } ${getRoundedCornerClass(language, index, cities.length)}
              ${index !== cities.length - 1 && 'mb-2'}`}
            >
              {language === 'en' ? city.english : city.arabic}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestButtons;
