import { useState } from 'react';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  return (
    <div className="mx-2 bg-white flex items-center  justify-center">
      <input type="checkbox" className="hidden" />
      <label
        onClick={toggleCheckbox}
        className={`bg-toggleGrey w-12 h-6 rounded-xl cursor-pointer relative before:absolute before:bg-white
      before:w-4 before:h-4 before:rounded-full before:m-1 before:duration-200 ${
        isChecked ? '[&&]:bg-secondaryColor before:translate-x-6' : ''
      }`}
      ></label>
    </div>
  );
};

export default ToggleButton;
