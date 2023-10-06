import ToggleButton from '../ToggleButton';

const PriceBox = () => {
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>The Price</h2>
      </div>
      <div className="grid grid-cols-2 border border-borderTable ">
        <div className="flex flex-col border-borderTable border-r border-b px-5 py-2 gap-y-3 pb-4">
          <span className="text-base text-primaryColor font-medium">
            One Day
          </span>
          <div className="flex items-center text-sm font-medium">
            <span>Not available</span>
            <ToggleButton />
            <span>Available</span>
            <input
              type="text"
              placeholder="Enter Price Here"
              className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
            />
          </div>
        </div>

        <div className="flex flex-col border-borderTable   border-b px-5 py-2 gap-y-3 pb-4">
          <span className="text-base text-primaryColor font-medium">
            Form Sunday to Wednesday
          </span>
          <div className="flex items-center text-sm font-medium">
            <span>Not available</span>
            <ToggleButton />
            <span>Available</span>
            <input
              type="text"
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
            <ToggleButton />
            <span>Available</span>
            <input
              type="text"
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
            <ToggleButton />
            <span>Available</span>
            <input
              type="text"
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
            <ToggleButton />
            <span>Available</span>
            <input
              type="text"
              placeholder="Enter Price Here"
              className="border rounded-md px-3 py-2 ml-3 focus:outline-primaryColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
