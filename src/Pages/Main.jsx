import { useEffect, useState } from 'react';
import AmentiesBox from '../components/Amenties/AmentiesBox';
import HouseButtons from '../components/HouseButtons';
import LocationButtons from '../components/LocationButtons';
import Notes from '../components/Notes/Notes';
import PriceBox from '../components/Price/PriceBox';
import PropetyName from '../components/PropetyName';
import Cookies from 'universal-cookie';
import UploadImages from '../components/UploadImages';
import { useToast } from '@chakra-ui/react';

const Main = () => {
  const [amenities, setAmenties] = useState({
    pool: true,
    gym: false,
    parking: false,
    security: false,
    wifi: false,
    cable: false,
    ac: false,
    heating: false,
    kitchen: false,
    garden: false,
    elevator: false,
    driver_room: false,
    nanny_room: false,
    elderly_disabled_suitable: false,
  });
  const [unitID, setUnitID] = useState('');
  const [type, setType] = useState('chalet');
  const [propetyName, setPropetyName] = useState('');
  const [location, setLocation] = useState('Al Khiran');
  const [pricingList, setPricingList] = useState([]);
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });
  const toast = useToast();
  function handleErrorMessage(title, description, status) {
    setMsg(() => ({
      title: title,
      description: description,
      status: status,
    }));
  }

  function showToast() {
    toast({
      title: msg.title,
      description: msg.description,
      status: msg.status,
      duration: 3000,
      isClosable: true,
    });
  }
  useEffect(() => {
    if (msg.title && msg.description && msg.status) {
      showToast();
    }
  }, [msg]);

  const cookies = new Cookies();
  const token = cookies.get('token');
  const HandleRequest = async data => {
    try {
      const loginData = await fetch(
        `${import.meta.env.VITE_BASE_API_PATH}/api/v1/owner/units/create`,
        {
          method: 'POST',
          body: JSON.stringify(data),

          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const response = await loginData.json();
      setUnitID(response._id);

      if (loginData.status === 200) {
        handleErrorMessage(
          'Draft Created Succesfuly',
          'Draft Created',
          'success'
        );
      }
    } catch (err) {
      console.log(err);
      handleErrorMessage(
        'Draft Creation Failed Check Inputs',
        'Draft Creation Failed',
        'error'
      );
    }
  };

  async function submitUnit() {
    console.log(location);
    let err = '';
    if (pricingList.length === 0) {
      handleErrorMessage('Prices Empty', 'Enter at least one price', 'error');
      err = 'yes';
    }
    if (propetyName === '')
      handleErrorMessage(
        'Property Name field Empty',
        'Property Name field cannot be empty',
        'error'
      );

    if (err === '') {
      const data = {
        name: propetyName,
        description: 'string',
        location: {
          address: [
            {
              name: 'Kuwait',
              name_l1: location,
              level: 'city',
            },
          ],
          latitude: 0,
          longitude: 0,
        },
        type: type,
        amenities: amenities,
        pricing_list: pricingList,
      };
      HandleRequest(data);
    }
  }
  return (
    <div>
      <main className=" py-6 px-10 mt-12 rounded-xl flex flex-col  bg-white border border-primaryGrey mx-24 ">
        <h1 className="text-secondaryColor font-bold text-2xl self-center mb-5">
          Property Information
        </h1>
        {/* House Type */}
        <HouseButtons setType={setType} />
        {/* Location Component   */}
        <LocationButtons location={location} setLocation={setLocation} />

        {/* Propety Name */}
        <PropetyName
          setPropetyName={setPropetyName}
          propetyName={propetyName}
        />
        <AmentiesBox setAmenties={setAmenties} />
        <PriceBox setPricingList={setPricingList} />

        <Notes />
        <button
          onClick={() => submitUnit()}
          className="self-center mt-6 text-white   rounded-md px-36 py-3 bg-gradient-to-br from-tertiaryColor to-secondaryColor"
        >
          Submit
        </button>
      </main>
      <UploadImages token={token} unitID={unitID} />
    </div>
  );
};

export default Main;
