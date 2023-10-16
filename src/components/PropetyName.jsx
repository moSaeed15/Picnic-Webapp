import { useLocation } from 'react-router-dom';

const PropetyName = ({
  setPropetyName,
  propetyName,
  disabled,
  name,
  language,
}) => {
  const handleInputChange = event => {
    const { value } = event.target;
    setPropetyName(value);
  };
  return (
    <div className="mt-5 px-5">
      <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
        <h2> {language === 'en' ? 'Property Name:' : 'اسم العقار'} </h2>
      </div>
      <div className="flex flex-col border border-borderTable ">
        {disabled ? (
          <input
            disabled={disabled}
            value={name}
            onChange={handleInputChange}
            type="text"
            placeholder={
              language === 'en'
                ? 'Enter Property Name Here'
                : 'أدخل اسم العقار هنا'
            }
            className="border rounded-md px-3 py-2 ml-3  focus:outline-primaryColor mr-10 my-5 "
          />
        ) : (
          <input
            value={propetyName}
            onChange={handleInputChange}
            type="text"
            placeholder={
              language === 'en'
                ? 'Enter Property Name Here'
                : 'أدخل اسم العقار هنا'
            }
            className="border rounded-md px-3 py-2 ml-3  focus:outline-primaryColor mr-10 my-5 "
          />
        )}
      </div>
    </div>
  );
};

export default PropetyName;
