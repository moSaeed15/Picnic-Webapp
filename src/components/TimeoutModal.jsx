import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TimeoutModal = ({ isOpen, onOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'teal'}>Session timeout</ModalHeader>
          <ModalBody color={'teal.800'}>
            You will now be Redirected to the login page
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={() => navigate('/')}>
              Go to Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TimeoutModal;
