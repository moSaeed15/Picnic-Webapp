import { useEffect, useState } from 'react';
import ChaletData from '../components/Admin/ChaletData';
import GenerateUser from '../components/Admin/GenerateUser';
import Cookies from 'universal-cookie';

const Admin = ({ language }) => {
  const [chaletData, setChaletData] = useState();
  const [farmData, setFarmData] = useState();
  const [houseData, setHouseData] = useState();
  const cookies = new Cookies();
  const token = cookies.get('token');

  const getData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/admin/units/?page=1&limit=999`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    setFarmData(data.data.filter(item => item.type === 'farm'));
    setHouseData(data.data.filter(item => item.type === 'rest_house'));
    setChaletData(data.data.filter(item => item.type === 'chalet'));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="2xl:px-52 xl:px-32 ">
      <h1 className="text-4xl font-bold text-secondaryColor mb-10   mt-7">
        {language === 'en' ? 'Admin Panel :' : 'لوحة الإدارة:'}
      </h1>
      <GenerateUser language={language} />
      <div className="grid grid-cols-2   gap-10 mt-10">
        {chaletData?.length !== 0 && (
          <ChaletData
            language={language}
            chaletData={chaletData}
            setChaletData={setChaletData}
            title={language === 'en' ? 'Chalet' : 'الشاليه'}
          />
        )}
        {farmData?.length !== 0 && (
          <ChaletData
            language={language}
            title={language === 'en' ? 'Farm' : 'المزرعة'}
            farmData={farmData}
            setFarmData={setFarmData}
          />
        )}
        {houseData?.length !== 0 && (
          <ChaletData
            language={language}
            title={language === 'en' ? 'Rental Houses' : 'بيوت للإيجار'}
            houseData={houseData}
            setHouseData={setHouseData}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
