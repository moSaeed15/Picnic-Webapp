import { useState } from 'react';
import AmentiesAvailable from './AmentiesAvailable';
import StageButtons from './StageButtons';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes from 'prop-types'
import HandleIncreaseDecrease from '../HandleIncreaseDecrease';
import DisabledAmenties from './DisabledAmenties';

const AmentiesBox = ({ setAmenties, disabled }) => {
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

              {location.pathname === '/chalet' && (
                <span className="text-primaryColor font-medium">
                  Nearby Sea?
                </span>
              )}

              {location.pathname === '/chalet' && (
                <div className="flex items-center mr-[3.35rem] text-xs mb-5  font-medium  justify-self-end ">
                  <span>No</span>
                  <ToggleButton
                    amentiesName={'sea_nearby'}
                    setAmenties={setAmenties}
                  />
                  <span>Yes</span>
                </div>
              )}
            </div>

            <AmentiesAvailable
              amentiesName={'driver_room'}
              setAmenties={setAmenties}
              text="Driver Room"
              borderB={'border-b'}
            />
            <HandleIncreaseDecrease text={'The Number of Floors'} />

            <AmentiesAvailable
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
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_master_bedrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">Master</label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="mr-[7px]"
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_single_bedrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">Single Room</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mr-[7px]"
                    onChange={e =>
                      setAmenties(prev => {
                        return {
                          ...prev,
                          num_bathrooms: e.target.checked ? 1 : 0,
                        };
                      })
                    }
                  />
                  <label htmlFor="">Bathroom</label>
                </div>
              </div>
            </div>

            <AmentiesAvailable
              amentiesName={'elevator'}
              setAmenties={setAmenties}
              text="Elevator"
              borderB={'border-b'}
            />
            <HandleIncreaseDecrease text={'The Number of Living Rooms'} />

            <AmentiesAvailable
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
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">Private</label>
                </div>
                <div className="">
                  <input
                    type="checkbox"
                    className="mr-[7px]"
                    value="Public"
                    checked={selectedOption === 'Public'}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">Public</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="mr-[7px]"
                    value="Both"
                    checked={selectedOption === 'Both'}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="">Both</label>
                </div>
              </div>
            </div>
            <AmentiesAvailable
              amentiesName={'kitchen'}
              setAmenties={setAmenties}
              text="Available Kitchen Utensils"
              borderB={'border-b'}
            />
            <AmentiesAvailable
              amentiesName={'nanny_room'}
              setAmenties={setAmenties}
              text="Nany Room"
              border={'border-r'}
              margin={true}
            />
            <AmentiesAvailable
              amentiesName={'wifi'}
              setAmenties={setAmenties}
              text="Available Wifi"
            />
          </div>
        </div>
      ) : (
        <DisabledAmenties setAmenties={setAmenties} disabled={setAmenties} />
      )}
    </>
  );
};

export default AmentiesBox;

AmentiesBox.propTypes = {
  setAmenties: PropTypes.func,
};
