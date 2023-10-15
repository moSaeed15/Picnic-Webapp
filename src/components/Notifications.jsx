import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Box,
  Text,
  Flex,
  Divider,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Notifications = ({ unApprovedUnits }) => {
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
            className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer"
          />
        }
        className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer "
        variant="unstyled"
      />
      <MenuList
        ml="-10px"
        mt="12px"
        color={'teal'}
        display="flex"
        flexDirection="column"
        py="20px"
      >
        <Flex
          px="10px"
          display="flex"
          flexDir="column"
          gap="30px"
          maxH="300px"
          overflowY="scroll"
        >
          {unApprovedUnits &&
            unApprovedUnits.map(unit => {
              return (
                <>
                  <Flex display="flex" gap="50px">
                    <Box display="flex" flexDir="column" gap="20px">
                      <Text w="170px" textAlign="center">
                        {unit && unApprovedUnits[0].owner.contact.name} has
                        requested to add a property
                      </Text>
                      <Link to="/placeholder" state={unit}>
                        <Text w="170px" textAlign="center">
                          View Form Details
                        </Text>
                      </Link>
                    </Box>

                    <Box display="flex" flexDir="column" gap="20px">
                      <Button colorScheme="teal">Accept</Button>
                      <Button colorScheme="red">Reject</Button>
                    </Box>
                  </Flex>
                  <Divider />
                </>
              );
            })}
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default Notifications;
