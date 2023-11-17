import { CloseIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';

const ImageBox = ({ index, image, handleDelete }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      key={index}
      w="100%"
      h="200px"
      bg="gray.200"
      borderRadius="md"
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={`uploaded-${index}`}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      />
      {hovered && (
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            aria-label="Cancel"
            icon={<CloseIcon />}
            colorScheme="red"
            size="lg"
            onClick={() => {
              handleDelete(index);
            }}
          />
        </Flex>
      )}
    </Box>
  );
};

export default ImageBox;
