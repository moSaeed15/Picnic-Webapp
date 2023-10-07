import ToggleButton from '../ToggleButton';
import PropTypes from 'prop-types'; // Import PropTypes from 'prop-types'

const AmentiesAvailable = ({
  text,
  border,
  borderB,
  margin,
  setAmenties,
  amentiesName,
}) => {
  return (
    <div
      className={`grid grid-cols-2 gap-x-28 px-5 pt-5 gap-y-5 ${borderB}  ${border} ${
        margin && 'pb-6'
      }`}
    >
      <span className="text-base  text-primaryColor font-medium">{text}</span>
      <div className="flex items-center self-start text-sm font-medium  justify-self-end mr-5">
        <span>Not available</span>
        <ToggleButton setAmenties={setAmenties} amentiesName={amentiesName} />
        <span>Available</span>
      </div>
    </div>
  );
};

AmentiesAvailable.propTypes = {
  text: PropTypes.string.isRequired,
  border: PropTypes.string,
  borderB: PropTypes.string,
  margin: PropTypes.bool,
};

export default AmentiesAvailable;
