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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const OwnerNotifications = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const [ownerUnits, SetOwnerUnits] = useState();
  const { id } = JSON.parse(sessionStorage.getItem('username'));

  const getData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/owner/units/all?owner_id=${id}&page=1&limit=10`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { data } = await response.json();
    console.log(data);
    SetOwnerUnits(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Menu colorScheme="teal">
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
          gap="30px"
          maxH="300px"
          overflowY="scroll"
        >
          {ownerUnits &&
            ownerUnits.map((unit, i) => {
              return (
                <div key={i}>
                  <Flex display="flex" gap="50px">
                    <Box display="flex" flexDir="column" gap="20px">
                      <Text w="170px" textAlign="center">
                        {unit && ownerUnits[0].owner.contact.name} has requested
                        to add a property
                      </Text>
                      <Link to="/placeholder" state={unit}>
                        <Text
                          w="170px"
                          textAlign="center"
                          onClick={() => {
                            localStorage.setItem('unit', JSON.stringify(unit));
                          }}
                        >
                          View Form Details
                        </Text>
                      </Link>
                    </Box>
                  </Flex>
                  <Divider mt="5px" />
                </div>
              );
            })}
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default OwnerNotifications;
