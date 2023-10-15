import { useLocation } from 'react-router-dom';

const PropetyName = ({ setPropetyName, propetyName, disabled }) => {
  const location = useLocation();

  const handleInputChange = event => {
    const { value } = event.target;
    setPropetyName(value);
  };
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2>Property Name</h2>
      </div>
      <div className="flex flex-col border border-borderTable ">
        {disabled ? (
          <input
            disabled={disabled}
            value={location.state.name}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Property Name Here"
            className="border rounded-md px-3 py-2 ml-3  focus:outline-primaryColor mr-10 my-5 "
          />
        ) : (
          <input
            value={propetyName}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Property Name Here"
            className="border rounded-md px-3 py-2 ml-3  focus:outline-primaryColor mr-10 my-5 "
          />
        )}
      </div>
    </div>
  );
};

export default PropetyName;
