import { useEffect, useState } from 'react';
import ChaletItem from '../ChaletItem';

const ChaletData = ({ title, chaletData, farmData, houseData, language }) => {
  return (
    <div>
      {chaletData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {language === 'ar' && 'بيانات'} {title}{' '}
            {language === 'en' && 'Data'} :
          </h3>
          {chaletData &&
            chaletData.map((item, i) => (
              <ChaletItem chaletData={item} language={language} key={i} />
            ))}
        </div>
      )}
      {farmData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {language === 'ar' && 'بيانات'} {title}{' '}
            {language === 'en' && 'Data'} :
          </h3>
          {farmData &&
            farmData.map((item, i) => (
              <ChaletItem farmData={item} language={language} key={i} />
            ))}
        </div>
      )}
      {houseData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {language === 'ar' && 'بيانات'} {title}{' '}
            {language === 'en' && 'Data'} :
          </h3>
          {houseData &&
            houseData.map((item, i) => (
              <ChaletItem houseData={item} language={language} key={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ChaletData;
