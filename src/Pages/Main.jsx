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

const Main = ({ language }) => {
  const [amenities, setAmenties] = useState({
    pool: true,
    gym: false,
    parking: false,
    security: false,
    wifi: false,
    cable: false,
    ac: false,
    heating: false,
    kitchen_utensils: false,
    garden: false,
    elevator: false,
    driver_room: false,
    nanny_room: false,
    elderly_disabled_suitable: false,
    sea_nearby: false,
    num_master_bedrooms: 0,
    num_single_bedrooms: 0,
    num_bathrooms: 0,
    num_living_rooms: 0,
    num_public_pools: 0,
    num_private_pools: 0,
  });

  const [unitID, setUnitID] = useState('');
  const [type, setType] = useState('chalet');
  const [propetyName, setPropetyName] = useState('');
  const [location, setLocation] = useState({
    english: 'Al-Khiran',
    arabic: 'الخيران',
    latitude: 28.9181,
    longitude: 48.1117,
    _id: '13',
  });
  const [pricingList, setPricingList] = useState([]);
  const [notes, setNotes] = useState('');
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });

  function resetData() {
    setAmenties({
      pool: true,
      gym: false,
      parking: false,
      security: false,
      wifi: false,
      cable: false,
      ac: false,
      heating: false,
      kitchen_utensils: false,
      garden: false,
      elevator: false,
      driver_room: false,
      nanny_room: false,
      elderly_disabled_suitable: false,
      sea_nearby: false,
      num_master_bedrooms: 0,
      num_single_bedrooms: 0,
      num_bathrooms: 0,
      num_living_rooms: 0,
      num_public_pools: 0,
      num_private_pools: 0,
    });
    setUnitID('');
    setType('chalet');
    setPropetyName('');
    setLocation({
      english: 'Al-Khiran',
      arabic: 'الخيران',
      latitude: 28.9181,
      longitude: 48.1117,
      _id: '13',
    });
    setPricingList([]);
    setNotes('');
  }

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
      handleErrorMessage(
        'Draft Creation Failed Check Inputs',
        'Draft Creation Failed',
        'error'
      );
    }
  };
  async function submitUnit() {
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
        description: notes,
        location: {
          address: [
            {
              _id: location._id,
              name: location.english,
              name_l1: location.arabic,
              level: 'city',
              latitude: location.latitude,
              longitude: location.longitude,
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
          {language === 'en' ? 'Property Information' : 'معلومات العقار'}
        </h1>
        {/* House Type */}
        <HouseButtons setType={setType} language={language} />
        {/* Location Component   */}
        <LocationButtons
          location={location}
          setLocation={setLocation}
          language={language}
        />

        {/* Propety Name */}
        <PropetyName
          setPropetyName={setPropetyName}
          propetyName={propetyName}
          language={language}
        />
        <AmentiesBox setAmenties={setAmenties} language={language} />
        <PriceBox
          pricingList={pricingList}
          setPricingList={setPricingList}
          language={language}
        />

        <Notes language={language} setNotes={setNotes} notes={notes} />
        <button
          onClick={() => submitUnit()}
          className="self-center mt-6 text-white   rounded-md px-36 py-3 bg-gradient-to-br from-tertiaryColor to-secondaryColor"
        >
          {language === 'en' ? 'Submit' : 'سلم'}
        </button>
      </main>
      <UploadImages
        token={token}
        unitID={unitID}
        language={language}
        resetData={resetData}
      />
    </div>
  );
};

export default Main;
