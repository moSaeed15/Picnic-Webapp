import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HouseButtons = () => {
  const location = useLocation();

  const [selectedHouse, setSelectedHouse] = useState(
    location.pathname.slice(1)
  );

  const handleHouseClick = path => {
    setSelectedHouse(path);
  };
  return (
    <div className="px-5">
      <label className="text-darkBlue text-base font-medium ml-1 mb-2  ">
        Location:
      </label>
      <div className="">
        <Link
          to="/chalet"
          onClick={() => handleHouseClick('chalet')}
          className={`border-borderButton border-r py-2  bg-tertiaryGrey text-textGrey px-20 rounded-l-full font-medium text-xs ${
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
            location.pathname === '/farm' && '[&&]:bg-primaryColor  text-white'
          }`}
        >
          Farms
        </Link>
        <Link
          to="/house"
          onClick={() => handleHouseClick('house')}
          className={`border-borderButton py-2  bg-tertiaryGrey text-textGrey  px-20 rounded-r-full font-medium text-xs ${
            location.pathname === '/house' && '[&&]:bg-primaryColor  text-white'
          }`}
        >
          Rest Houses
        </Link>
      </div>
    </div>
  );
};

export default HouseButtons;
