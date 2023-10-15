import { useState } from 'react';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';

const PriceBox = ({ pricingList, setPricingList, disabled }) => {
  const location = useLocation();
  const [priceList, setPriceList] = useState({
    one_day: 0,
    sunday_to_wednesday: 0,
    thursday_to_saturday: 0,
    one_week: 0,
    one_month: 0,
  });

  const [priceListSelected, setPriceListSelected] = useState({
    one_day: false,
    sunday_to_wednesday: false,
    thursday_to_saturday: false,
    one_week: false,
    one_month: false,
  });

  const handleInputChange = (priceName, value) => {
    setPriceList(prevState => ({
      ...prevState,
      [priceName]: value,
    }));
    setPricingList(prev => {
      return prev.map(item => {
        if (item.pricing_type === priceName) {
          return { ...item, price: +value }; // Set the new price value (e.g., 10)
        }
        // For other pricing types, keep the object unchanged
        return item;
      });
    });
  };

  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>The Price</h2>
      </div>
      {!disabled ? (
        <div className="grid grid-cols-2 border border-borderTable ">
          <div className="flex flex-col border-borderTable border-r border-b px-5 py-2 gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Day
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                setPriceListSelected={setPriceListSelected}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_day'}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_day ? false : true}
                name="one_day"
                value={priceList.one_day}
                onChange={e => handleInputChange('one_day', e.target.value)}
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable   border-b px-5 py-2 gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              From Sunday to Wednesday
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                setPriceListSelected={setPriceListSelected}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'sunday_to_wednesday'}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.sunday_to_wednesday ? false : true}
                value={priceList.sunday_to_wednesday}
                onChange={e =>
                  handleInputChange('sunday_to_wednesday', e.target.value)
                }
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-r border-b px-5 py-2 gap-y-3  pb-4">
            <span className="text-base text-primaryColor font-medium">
              Form Thursday to Saturday
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'thursday_to_saturday'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.thursday_to_saturday ? false : true}
                value={priceList.thursday_to_saturday}
                onChange={e =>
                  handleInputChange('thursday_to_saturday', e.target.value)
                }
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-b px-5 py-2 gap-y-3  pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Week
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_week'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_week ? false : true}
                value={priceList.one_week}
                onChange={e => handleInputChange('one_week', e.target.value)}
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-r px-5 py-2  gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Month
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_month'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_month ? false : true}
                type="number"
                value={priceList.one_month}
                onChange={e => handleInputChange('one_month', e.target.value)}
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 border border-borderTable ">
          <div className="flex flex-col border-borderTable border-r border-b px-5 py-2 gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Day
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>

              <ToggleButton
                disabled={disabled}
                pricing_list={location.state.pricing_list.some(
                  item => item.pricing_type === 'one_day'
                )}
                setPriceListSelected={setPriceListSelected}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_day'}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_day ? false : true}
                name="one_day"
                value={
                  location.state.pricing_list.find(
                    item => item.pricing_type === 'one_day'
                  )?.price
                }
                onChange={e => handleInputChange('one_day', e.target.value)}
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable   border-b px-5 py-2 gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              From Sunday to Wednesday
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                disabled={disabled}
                pricing_list={location.state.pricing_list.some(
                  item => item.pricing_type === 'sunday_to_wednesday'
                )}
                setPriceListSelected={setPriceListSelected}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'sunday_to_wednesday'}
              />
              <span>Available</span>
              {console.log()}
              <input
                disabled={priceListSelected.sunday_to_wednesday ? false : true}
                value={
                  location.state.pricing_list.find(
                    item => item.pricing_type === 'sunday_to_wednesday'
                  )?.price
                }
                onChange={e =>
                  handleInputChange('sunday_to_wednesday', e.target.value)
                }
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-r border-b px-5 py-2 gap-y-3  pb-4">
            <span className="text-base text-primaryColor font-medium">
              Form Thursday to Saturday
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                disabled={disabled}
                pricing_list={location.state.pricing_list.some(
                  item => item.pricing_type === 'thursday_to_saturday'
                )}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'thursday_to_saturday'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.thursday_to_saturday ? false : true}
                value={
                  location.state.pricing_list.find(
                    item => item.pricing_type === 'thursday_to_saturday'
                  )?.price
                }
                onChange={e =>
                  handleInputChange('thursday_to_saturday', e.target.value)
                }
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-b px-5 py-2 gap-y-3  pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Week
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                disabled={disabled}
                pricing_list={location.state.pricing_list}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_week'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_week ? false : true}
                value={
                  location.state.pricing_list.find(
                    item => item.pricing_type === 'one_week'
                  )?.price
                }
                onChange={e => handleInputChange('one_week', e.target.value)}
                type="number"
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>

          <div className="flex flex-col border-borderTable border-r px-5 py-2  gap-y-3 pb-4">
            <span className="text-base text-primaryColor font-medium">
              One Month
            </span>
            <div className="flex items-center text-sm font-medium">
              <span>Not available</span>
              <ToggleButton
                disabled={disabled}
                pricing_list={location.state.pricing_list}
                priceList={priceList}
                setPricingList={setPricingList}
                priceName={'one_month'}
                setPriceListSelected={setPriceListSelected}
              />
              <span>Available</span>
              <input
                disabled={priceListSelected.one_month ? false : true}
                type="number"
                value={
                  location.state.pricing_list.find(
                    item => item.pricing_type === 'one_month'
                  )?.price
                }
                onChange={e => handleInputChange('one_month', e.target.value)}
                placeholder="Enter Price Here"
                className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceBox;
