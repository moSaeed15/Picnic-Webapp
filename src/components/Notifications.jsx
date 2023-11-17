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
  useDisclosure,
} from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import TimeoutModal from './TimeoutModal';

const Notifications = ({ language }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cookies = new Cookies();
  const token = cookies.get('token');
  const [units, setUnits] = useState();
  const location = useLocation();

  const getData = async () => {
    const unapprovedUnits = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/admin/units/approval?page=1&limit=100`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const unapprovedUnitsData = await unapprovedUnits.json();
    setUnits(unapprovedUnitsData.data);
    if (unapprovedUnits.status === 401) {
      onOpen();
      setTimeout(function () {
        navigate('/');
      }, 3000);
    }
  };

  useEffect(() => {
    getData();
  }, [location.pathname]);
  return (
    <Menu colorScheme="teal">
      <TimeoutModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuButton
        border="none"
        as={IconButton}
        aria-label={language === 'en' ? 'Options' : 'الخيارات'}
        icon={
          <img
            src="/bell.svg"
            alt={language === 'en' ? 'Notification Icon' : 'أيقونة الإشعار'}
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
          {units &&
            units.map((unit, i) => {
              return (
                <div key={i}>
                  <Flex display="flex" gap="50px">
                    <Box display="flex" flexDir="column" gap="20px">
                      <Text w="170px" textAlign="center">
                        {unit &&
                          (language === 'en'
                            ? `${unit.owner.name} has requested to add a property`
                            : `طلب ${unit.owner.name} إضافة ممتلكات جديدة`)}
                      </Text>
                      <Link to="/placeholder" state={unit}>
                        <Text
                          w="170px"
                          textAlign="center"
                          onClick={() => {
                            localStorage.setItem('unit', JSON.stringify(unit));
                          }}
                        >
                          {language === 'en'
                            ? 'View Form Details'
                            : 'عرض تفاصيل النموذج'}
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

export default Notifications;
