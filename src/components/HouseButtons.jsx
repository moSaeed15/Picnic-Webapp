import { useState } from 'react';
import { Link } from 'react-router-dom';

const HouseButtons = ({ setType, disabled, type, language }) => {
  const [selectedHouse, setSelectedHouse] = useState(
    location.pathname.slice(1)
  );

  const handleHouseClick = path => {
    setSelectedHouse(path);
    setType(path);
  };

  return (
    <div className="px-5">
      <label className="text-darkBlue text-base font-medium ml-1 mb-2  ">
        {language === 'en' ? 'Location:' : 'الموقع:'}
      </label>
      {!disabled ? (
        <div className="">
          <Link
            to="/chalet"
            onClick={() => handleHouseClick('chalet')}
            className={`border-borderButton  py-2  bg-tertiaryGrey text-textGrey px-20  font-medium text-xs ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            } ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            } ${language === 'en' ? 'rounded-l-full' : 'rounded-r-full'}`}
          >
            {language === 'en' ? 'Chalet:' : 'شالية'}
          </Link>
          <Link
            to="/farm"
            onClick={() => handleHouseClick('farm')}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey  px-20  font-medium text-xs ${
              location.pathname === '/farm' &&
              '[&&]:bg-primaryColor  text-white'
            }`}
          >
            {language === 'en' ? 'Farms' : 'مزرعة'}
          </Link>
          <Link
            to="/house"
            onClick={() => handleHouseClick('rest_house')}
            className={`border-borderButton py-2 border-r bg-tertiaryGrey text-textGrey  px-20  font-medium text-xs ${
              location.pathname === '/house' &&
              '[&&]:bg-primaryColor  text-white'
            } ${language === 'en' ? 'rounded-r-full' : 'rounded-l-full'} `}
          >
            {language === 'en' ? 'Rest Houses' : 'استراحات'}
          </Link>
        </div>
      ) : (
        <div className="">
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey px-20 ${
              language === 'en' ? 'rounded-l-full' : 'rounded-r-full'
            } font-medium text-xs ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'chalet' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            {language === 'en' ? 'Chalet' : 'شالية'}
          </Link>
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey  px-20  font-medium text-xs ${
              location.pathname === '/farm' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'farm' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            {language === 'en' ? 'Farms' : 'مزرعة'}
          </Link>
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton py-2  bg-tertiaryGrey text-textGrey  px-20 ${
              language === 'en' ? 'rounded-r-full' : 'rounded-l-full'
            } font-medium text-xs ${
              location.pathname === '/house' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'rest_house' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            {language === 'en' ? 'Rest Houses' : 'استراحات'}
          </Link>
        </div>
      )}
    </div>
  );
};

export default HouseButtons;
