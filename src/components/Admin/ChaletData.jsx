import { useEffect, useState } from 'react';
import ChaletItem from '../ChaletItem';

const ChaletData = ({ title, chaletData, farmData, houseData }) => {
  return (
    <div>
      {chaletData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {title} Data :
          </h3>
          {chaletData &&
            chaletData.slice(-2).map(item => <ChaletItem chaletData={item} />)}
        </div>
      )}
      {farmData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {title} Data :
          </h3>
          {farmData && farmData.map(item => <ChaletItem farmData={item} />)}
        </div>
      )}
      {houseData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {title} Data :
          </h3>
          {houseData && houseData.map(item => <ChaletItem houseData={item} />)}
        </div>
      )}
    </div>
  );
};

export default ChaletData;
