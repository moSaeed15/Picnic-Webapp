import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

const LanguageToggle = ({ setLanguage }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setLanguage(!isArabic ? 'ar' : 'en');
    setIsArabic(!isArabic);
  };

  return (
    <div className="flex items-center">
      EN
      <div className="mx-2  flex items-center  justify-center">
        <input type="checkbox" className="hidden" />
        <label
          onClick={toggleLanguage}
          className={`bg-toggleGrey w-12 h-6 rounded-xl cursor-pointer relative before:absolute before:bg-white
    before:w-4 before:h-4 before:rounded-full before:m-1 before:duration-200 ${
      isArabic ? '[&&]:bg-tertiaryColor before:-translate-x-6' : ''
    } `}
        ></label>
      </div>
      AR
    </div>
  );
};

export default LanguageToggle;
