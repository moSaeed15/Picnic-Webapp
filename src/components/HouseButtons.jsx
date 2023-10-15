import { useState } from 'react';
import { Link } from 'react-router-dom';

const HouseButtons = ({ setType, disabled, type }) => {
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
        Location:
      </label>
      {!disabled ? (
        <div className="">
          <Link
            to="/chalet"
            onClick={() => handleHouseClick('chalet')}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey px-20 rounded-l-full font-medium text-xs ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            } ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            }`}
          >
            Chalet
          </Link>
          <Link
            to="/farm"
            onClick={() => handleHouseClick('farm')}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey  px-20  font-medium text-xs ${
              location.pathname === '/farm' &&
              '[&&]:bg-primaryColor  text-white'
            }`}
          >
            Farms
          </Link>
          <Link
            to="/house"
            onClick={() => handleHouseClick('rest_house ')}
            className={`border-borderButton py-2  bg-tertiaryGrey text-textGrey  px-20 rounded-r-full font-medium text-xs ${
              location.pathname === '/house' &&
              '[&&]:bg-primaryColor  text-white'
            }`}
          >
            Rest Houses
          </Link>
        </div>
      ) : (
        <div className="">
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey px-20 rounded-l-full font-medium text-xs ${
              location.pathname === '/chalet' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'chalet' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            Chalet
          </Link>
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey  px-20  font-medium text-xs ${
              location.pathname === '/farm' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'farm' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            Farms
          </Link>
          <Link
            onClick={e => e.preventDefault()}
            className={`border-borderButton py-2  bg-tertiaryGrey text-textGrey  px-20 rounded-r-full font-medium text-xs ${
              location.pathname === '/house' &&
              '[&&]:bg-primaryColor  text-white'
            } ${type === 'rest_house' && '[&&&]:bg-primaryColor  text-white'}`}
          >
            Rest Houses
          </Link>
        </div>
      )}
    </div>
  );
};

export default HouseButtons;
