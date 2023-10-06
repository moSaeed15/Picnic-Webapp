import { useState } from 'react';
import AmentiesBox from '../components/Amenties/AmentiesBox';
import HouseButtons from '../components/HouseButtons';
import LocationButtons from '../components/LocationButtons';
import Notes from '../components/Notes/Notes';
import PriceBox from '../components/Price/PriceBox';
import PropetyName from '../components/PropetyName';

const Main = () => {
  // `${import.meta.env.VITE_BASE_API_PATH}/profile`,
  const [amenities, setAmenties] = useState({
    pool: false,
    gym: false,
    parking: false,
    security: false,
    wifi: false,
    cable: false,
    ac: false,
    heating: false,
    kitchen: false,
  });
  return (
    <main className=" py-6 px-10 mt-12 rounded-xl flex flex-col  bg-white border border-primaryGrey mx-24 ">
      <h1 className="text-secondaryColor font-bold text-2xl self-center mb-5">
        Property Information
      </h1>
      {/* House Type */}
      <HouseButtons />
      {/* Location Component   */}
      <LocationButtons />

      {/* Propety Name */}
      <PropetyName />
      <AmentiesBox setAmenties={setAmenties} />
      <PriceBox />
      <Notes />
      <button className="self-center mt-6 text-white   rounded-md px-36 py-3 bg-gradient-to-br from-tertiaryColor to-secondaryColor">
        Submit
      </button>
    </main>
  );
};

export default Main;
