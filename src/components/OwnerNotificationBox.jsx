import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const OwnerNotificationBox = ({ ownerUnits, token, language, setClicked }) => {
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });
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

  function formatDate(inputDate) {
    const dateObj = new Date(inputDate);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const accept = async id => {
    setClicked(prev => !prev);
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_PATH}/api/v1/owner/bookings/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'confirmed' }),
      }
    );
    if (response.status === 200)
      setMsg(() => {
        return {
          description: 'Booking Accepted',
          title: 'Booking Accepted',
          status: 'success',
        };
      });
  };

  const reject = async id => {
    setClicked(prev => !prev);

    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_PATH}/api/v1/owner/bookings/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'rejected' }),
      }
    );
    if (response.status === 200)
      setMsg(() => {
        return {
          description: 'Booking Rejected',
          title: 'Booking Rejected',
          status: 'success',
        };
      });
  };
  return (
    <>
      {ownerUnits &&
        ownerUnits.map((unit, i) => {
          return (
            <div key={i}>
              <Flex display="flex" gap="10px">
                <Box display="flex" flexDir="column" gap="10px">
                  <Heading fontSize="20px">
                    {language === 'en' ? unit.title : unit.title_l1}
                  </Heading>
                  <Text w="170px">
                    {language === 'en' ? unit.message : unit.message_l1}
                    {unit.type === 'booking' &&
                      `From ${formatDate(unit.booking_out.start_date)} to 
                    ${formatDate(unit.booking_out.end_date)} by customer ${
                        unit.booking_out.name
                      }`}
                  </Text>
                  {console.log(unit)}
                  {unit.type === 'approval' && (
                    <Text w="170px">
                      {language === 'en' ? 'Unit Name:' : 'إسم الوحدة:'}
                      {unit.approval_out.unit_out.name}
                    </Text>
                  )}
                  {unit.title === 'Unit Rejection' &&
                    unit.approval_out.admin_comment !== '' && (
                      <Text w="170px">
                        {language === 'en' ? 'Reason:' : 'السبب'}
                        {unit.approval_out.admin_comment}
                      </Text>
                    )}
                  {unit.type === 'booking' && (
                    <Text w="170px">
                      Unit Name: {unit.booking_out.unit_out.name}
                    </Text>
                  )}
                  {unit.type === 'booking' && (
                    <Text w="170px" whiteSpace="nowrap">
                      Phone number: {unit.booking_out.phone}
                    </Text>
                  )}
                  {unit.type === 'booking' && (
                    <Text w="200px" whiteSpace="nowrap">
                      Email: {unit.booking_out.email}
                    </Text>
                  )}
                </Box>
                {unit.type === 'approval' && (
                  <Img
                    width="90px"
                    height="90px"
                    src={unit.approval_out.unit_out.thumbnail.url}
                  />
                )}
                {unit.type === 'booking' && (
                  <Box
                    display="flex"
                    flexDir="column"
                    gap="20px"
                    justifyContent="center"
                  >
                    <Button
                      colorScheme="teal"
                      onClick={() => {
                        accept(unit.booking_out._id);
                      }}
                    >
                      Accept
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        reject(unit.booking_out._id);
                      }}
                    >
                      Reject
                    </Button>
                  </Box>
                )}
              </Flex>
              <Divider mt="5px" />
            </div>
          );
        })}
    </>
  );
};

export default OwnerNotificationBox;
