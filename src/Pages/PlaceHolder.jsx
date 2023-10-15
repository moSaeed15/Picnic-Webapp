import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import AmentiesBox from '../components/Amenties/AmentiesBox';
import HouseButtons from '../components/HouseButtons';
import LocationButtons from '../components/LocationButtons';
import Notes from '../components/Notes/Notes';
import PriceBox from '../components/Price/PriceBox';
import PropetyName from '../components/PropetyName';
import UploadImages from '../components/UploadImages';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const PlaceHolder = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });
  const navigate = useNavigate();

  const toast = useToast();
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
    // This code will run every time msg state is updated

    if (msg.title && msg.description && msg.status) {
      showToast();
    }
  }, [msg]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();
  console.log(location);
  const [rejectionReason, setRejectReason] = useState('');
  const accept = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_PATH}/api/v1/admin/units/approve/${
        location.state.approval.unit_id
      }`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: 'accepted', new_status: 'approved' }),
      }
    );
    if (response.status === 200)
      setMsg(() => {
        return {
          description: 'Unit Accepted',
          title: 'Unit Accepted',
          status: 'success',
        };
      });
    navigate('/admin');
  };

  const reject = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_PATH}/api/v1/admin/units/approve/${
        location.state.approval.unit_id
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          review: rejectionReason,
          new_status: 'rejected',
        }),
      }
    );
    if (response.status === 200)
      setMsg(() => {
        return {
          description: rejectionReason,
          title: 'Unit Rejected',
          status: 'error',
        };
      });
    console.log('first');
    navigate('/admin');
  };

  const disabled = true;
  return (
    <div className="flex flex-col">
      <main className=" py-6 px-10 mt-12 rounded-xl flex flex-col  bg-white border border-primaryGrey mx-24 ">
        <h1 className="text-secondaryColor font-bold text-2xl self-center mb-5">
          Property Information
        </h1>

        {/* House Type */}

        <HouseButtons disabled={disabled} type={location.state.type} />

        {/* Location Component   */}
        <LocationButtons
          disabled={disabled}
          address={location.state.location.address[0].name_l1}
        />

        {/* Propety Name */}

        <PropetyName disabled={disabled} name={location.state.name} />
        <AmentiesBox disabled={disabled} />
        <PriceBox disabled={disabled} />

        <Notes disabled={disabled} />
      </main>

      <UploadImages disabled={disabled} />

      <Box className="self-center mt-6 text-white " display="flex" gap="20px">
        <Button
          colorScheme="teal"
          fontSize="20px"
          px="50px"
          py="20px"
          onClick={() => accept()}
        >
          Accept
        </Button>
        <Button
          colorScheme="red"
          fontSize="20px"
          px="50px"
          py="20px"
          onClick={onOpen}
        >
          Reject
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write the Reason of refusal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl colorScheme="teal">
                <FormLabel>Rejection Reason</FormLabel>
                <Input
                  placeholder="Rejection Reason"
                  value={rejectionReason}
                  onChange={e => setRejectReason(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={() => reject()}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default PlaceHolder;
