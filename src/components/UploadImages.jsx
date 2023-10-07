import { Box, Heading, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import { func } from 'prop-types';
import { useEffect, useState } from 'react';
import { FcUpload } from 'react-icons/fc';

const UploadImages = ({ token, unitID }) => {
  const [images, setImages] = useState([]);
  const [msg, setMsg] = useState({ title: '', description: '', status: '' });
  const [photos, setPhotos] = useState();
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

  const handleImageUpload = event => {
    const files = event.target.files;
    const imageFiles = [];
    setPhotos(files);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imageFiles.push(reader.result);

        if (imageFiles.length === files.length) {
          const totalImages = images.length + imageFiles.length;
          if (totalImages <= 15) {
            setImages([...images, ...imageFiles]);

            setMsg(() => {
              return {
                description: `You uploaded ${totalImages} image${
                  totalImages === 1 ? '' : 's'
                }.`,
                title: 'Upload Succesful',
                status: 'success',
              };
            });
          } else {
            console.log('test');
            setMsg(() => {
              return {
                description: 'You uploaded more than 15 images.',
                title: 'Upload Failed',
                status: 'error',
              };
            });
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
    // setFormData(formData);
    // console.log(formData);
  };
  async function PublishUnit() {
    if (unitID !== '') {
      let error = '';
      for (let i = 0; i < photos.length; i++) {
        const formData = new FormData();
        formData.append(`file`, photos[i]);
        const uploadImage = await fetch(
          `${
            import.meta.env.VITE_BASE_API_PATH
          }/api/v1/owner/units/${unitID}/upload`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        if (uploadImage.status !== 200) {
          error = 'err';
        }
      }

      const publishUnit = await fetch(
        `${
          import.meta.env.VITE_BASE_API_PATH
        }/api/v1/owner/units/${unitID}/submit`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (publishUnit.status === 200 && err === '') {
        setMsg(() => {
          return {
            description: 'Unit Published and pending apporval',
            title: 'Unit Published',
            status: 'success',
          };
        });
      }
    } else {
      setMsg(() => {
        return {
          description: 'Create Unit Draft before trying to publish',
          title: 'Create Unit Draft',
          status: 'error',
        };
      });
    }
  }

  return (
    <Box className=" mt-12 rounded-xl flex flex-col  bg-white border border-primaryGrey mx-24 pb-10 ">
      <h1 className="text-secondaryColor font-bold text-2xl self-center mt-5">
        Image Upload
      </h1>
      <div className="px-5 mt-5">
        <div className="text-white bg-primaryColor rounded-t-xl py-3 px-5 font-bold">
          <Heading size="md">Upload Images</Heading>
          <Text fontSize="10px" color="teal.100">
            Up to 15 images
          </Text>
        </div>
        <div className=" border border-borderTable py-3 px-5 gap-3">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <FcUpload fontSize="30px" />
          </label>{' '}
          <SimpleGrid columns={4} spacing={4} mt={5}>
            {images.map((image, index) => (
              <Box
                key={index}
                w="100%"
                h="200px"
                bg="gray.200"
                borderRadius="md"
              >
                <img
                  src={image}
                  alt={`uploaded-${index}`}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </div>
      </div>
      <button
        onClick={() => PublishUnit()}
        className="self-center mt-6 text-white   rounded-md px-36 py-3 bg-gradient-to-br from-tertiaryColor to-secondaryColor"
      >
        Upload Images and Publish
      </button>
    </Box>
  );
};

export default UploadImages;
