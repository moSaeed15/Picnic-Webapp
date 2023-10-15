import { useEffect, useState } from 'react';
import ChaletData from '../components/Admin/ChaletData';
import GenerateUser from '../components/Admin/GenerateUser';
import Cookies from 'universal-cookie';

const Admin = () => {
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
    console.log(data);
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
        Admin Panel :
      </h1>
      <GenerateUser />
      <div className="grid grid-cols-2   gap-10 mt-10">
        {chaletData?.length !== 0 && (
          <ChaletData
            chaletData={chaletData}
            setChaletData={setChaletData}
            title="Chalet"
          />
        )}
        {farmData?.length !== 0 && (
          <ChaletData
            title="Farm"
            farmData={farmData}
            setFarmData={setFarmData}
          />
        )}
        {houseData?.length !== 0 && (
          <ChaletData
            title="Rental Houses"
            houseData={houseData}
            setHouseData={setHouseData}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
