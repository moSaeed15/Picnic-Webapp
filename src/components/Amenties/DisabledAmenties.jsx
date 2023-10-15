import { useState } from 'react';
import AmentiesAvailable from './AmentiesAvailable';
import StageButtons from './StageButtons';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';
import HandleIncreaseDecrease from '../HandleIncreaseDecrease';

const DisabledAmenties = ({ setAmenties, disabled }) => {
  const location = useLocation();
  console.log(location.state.amenities);
  const selectedOption =
    location.state.amenities?.num_public_pools === 1
      ? 'Public'
      : location.state.amenities?.num_private_pools === 1
      ? 'Private'
      : location.state.amenities?.num_public_pools === 1 &&
        location.state.amenities?.num_private_pools === 1
      ? 'Both'
      : '';

  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>Amenities</h2>
      </div>
      <div className="grid grid-cols-2 border border-borderTable ">
        <div className="grid grid-cols-2 2xl:gap-x-28  xl:gap-x-10  px-5 pt-5 gap-y-5 border-r border-borderTable border-b">
          <StageButtons />
          <div className="flex items-center text-xs font-medium justify-self-end ">
            <span> First Class </span>

            <ToggleButton />

            <span> Second Class</span>
          </div>
          {location.state.type === 'chalet' && (
            <span className="text-primaryColor font-medium">Nearby Sea?</span>
          )}

          {location.state.type === 'chalet' && (
            <div className="flex items-center mr-[3.35rem] text-xs mb-5  font-medium  justify-self-end ">
              <span>No</span>
              <ToggleButton
                disabled={disabled}
                amenties={location.state.amenities}
              />
              <span>Yes</span>
            </div>
          )}
        </div>

        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'driver_room'}
          setAmenties={setAmenties}
          text="Driver Room"
          borderB={'border-b'}
        />
        <HandleIncreaseDecrease text={'The Number of Floors'} />

        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          setAmenties={setAmenties}
          amentiesName={'garden'}
          text="Garden"
          borderB={'border-b'}
        />

        <div className="grid grid-cols-1 border-b px-5 pt-5  gap-y-5  border-r border-borderTable  pb-4 ">
          <span className="text-base text-primaryColor font-medium">
            The Number of Rooms
          </span>
          <div className="flex gap-4 text-sm font-medium">
            <div className="">
              <input
                type="checkbox"
                className="mr-[7px]"
                checked={location.state.amenities.num_master_bedrooms}
              />
              <label htmlFor="">Master</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                className="mr-[7px]"
                checked={location.state.amenities.num_single_bedrooms}
              />
              <label htmlFor="">Single Room</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-[7px]"
                checked={location.state.amenities.num_bathrooms}
              />
              <label htmlFor="">Bathroom</label>
            </div>
          </div>
        </div>

        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'elevator'}
          setAmenties={setAmenties}
          text="Elevator"
          borderB={'border-b'}
        />
        <HandleIncreaseDecrease text={'The Number of Living Rooms'} />

        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'elderly_disabled_suitable'}
          setAmenties={setAmenties}
          text="Suitable for Disabled People and The Elderly"
          borderB={'border-b'}
        />
        <div className="grid grid-cols-1 border-b px-5 pt-5  gap-y-5  border-r border-borderTable pb-4   ">
          <span className="text-base text-primaryColor font-medium">
            The Number of Swimming Pool
          </span>
          <div className="flex gap-4 text-sm font-medium">
            <div className="">
              <input
                type="checkbox"
                className="mr-[7px]"
                value="Private"
                checked={selectedOption === 'Private'}
              />
              <label htmlFor="">Private</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                className="mr-[7px]"
                value="Public"
                checked={selectedOption === 'Public'}
              />
              <label htmlFor="">Public</label>
            </div>
            <div>
              <input
                type="checkbox"
                className="mr-[7px]"
                value="Both"
                checked={selectedOption === 'Both'}
              />
              <label htmlFor="">Both</label>
            </div>
          </div>
        </div>
        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'kitchen'}
          setAmenties={setAmenties}
          text="Available Kitchen Utensils"
          borderB={'border-b'}
        />
        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'nanny_room'}
          setAmenties={setAmenties}
          text="Nany Room"
          border={'border-r'}
          margin={true}
        />
        <AmentiesAvailable
          disabled={disabled}
          amenties={location.state.amenities}
          amentiesName={'wifi'}
          setAmenties={setAmenties}
          text="Available Wifi"
        />
      </div>
    </div>
  );
};

export default DisabledAmenties;
