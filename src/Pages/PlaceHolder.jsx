import { Box, Button } from '@chakra-ui/react';
import AmentiesBox from '../components/Amenties/AmentiesBox';
import HouseButtons from '../components/HouseButtons';
import LocationButtons from '../components/LocationButtons';
import Notes from '../components/Notes/Notes';
import PriceBox from '../components/Price/PriceBox';
import PropetyName from '../components/PropetyName';
import UploadImages from '../components/UploadImages';

const PlaceHolder = () => {
  const disabled = true;
  return (
    <div className="flex flex-col">
      <main className=" py-6 px-10 mt-12 rounded-xl flex flex-col  bg-white border border-primaryGrey mx-24 ">
        <h1 className="text-secondaryColor font-bold text-2xl self-center mb-5">
          Property Information
        </h1>

        {/* House Type */}

        <HouseButtons disabled={disabled} />

        {/* Location Component   */}
        <LocationButtons disabled={disabled} />

        {/* Propety Name */}

        <PropetyName disabled={disabled} />
        <AmentiesBox disabled={disabled} />
        <PriceBox disabled={disabled} />

        <Notes disabled={disabled} />
      </main>

      <UploadImages disabled={disabled} />

      <Box className="self-center mt-6 text-white " display="flex" gap="20px">
        <Button colorScheme="teal" fontSize="20px" px="50px" py="20px">
          Accept
        </Button>
        <Button colorScheme="red" fontSize="20px" px="50px" py="20px">
          Reject
        </Button>
      </Box>
    </div>
  );
};

export default PlaceHolder;
