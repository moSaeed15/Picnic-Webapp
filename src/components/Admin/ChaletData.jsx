import { useEffect, useState } from 'react';
import ChaletItem from '../ChaletItem';
import Cookies from 'universal-cookie';

const ChaletData = ({ title }) => {
  const [chaletData, setChaletData] = useState();
  const [farmData, setFarmData] = useState();
  const [houseData, setHouseData] = useState();
  const cookies = new Cookies();
  const token = cookies.get('token');

  const getData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/admin/units/?page=1&limit=20`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    // setFarmData(data.data.filter(item => item.type === 'farm'));
    // setHouseData(data.data.filter(item => item.type === 'rest_house'));
    // setChaletData(data.data.filter(item => item.type === 'chalet'));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {chaletData && (
        <div className="flex flex-col bg-white py-7 min-w-[427.047px] gap-5  rounded-xl max-h-[500px]  overflow-y-scroll">
          <h3 className="text-3xl font-bold text-secondaryColor mb-5  px-8">
            {title} Data :
          </h3>

          <ChaletItem chaletData={chaletData} />
          <ChaletItem farmData={farmData} />
          <ChaletItem houseData={houseData} />
        </div>
      )}
    </div>
  );
};

export default ChaletData;
