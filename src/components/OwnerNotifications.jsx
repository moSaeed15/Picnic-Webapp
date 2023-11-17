import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Box,
  Text,
  Flex,
  Divider,
  Button,
  Heading,
  Img,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import OwnerNotificationBox from './OwnerNotificationBox';
import TimeoutModal from './TimeoutModal';

const OwnerNotifications = ({ language }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const [ownerUnits, SetOwnerUnits] = useState();
  const [clicked, setClicked] = useState(false);

  const getData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/owner/notifications?page=1&limit=1000`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = await response.json();
    SetOwnerUnits(data);
    if (response.status === 401) {
      onOpen();
      setTimeout(function () {
        navigate('/');
      }, 3000);
    }
  };

  useEffect(() => {
    getData();
  }, [clicked]);
  return (
    <Menu colorScheme="teal">
      <TimeoutModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuButton
        border="none"
        as={IconButton}
        aria-label="Options"
        icon={
          <img
            src="/bell.svg"
            alt="Notification Icon"
            loading="lazy"
            className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer sm:w-10"
          />
        }
        className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer "
        variant="unstyled"
      />
      <MenuList
        ml="-5px"
        mt="12px"
        color={'teal'}
        display="flex"
        flexDirection="column"
        py="20px"
      >
        <Flex
          px="20px"
          display="flex"
          flexDir="column"
          gap="10px"
          maxH="300px"
          overflowY="scroll"
        >
          <OwnerNotificationBox
            ownerUnits={ownerUnits}
            token={token}
            language={language}
            setClicked={setClicked}
          />
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default OwnerNotifications;
