import { useFormik } from 'formik';
import * as Yup from 'yup';
import SliderC from './SliderC';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { FormErrorMessage, Text } from '@chakra-ui/react';

const GenerateUser = () => {
  const [monthValue, setMonthValue] = useState('monthly');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      phone: '',
      email: '',
      name: '',
    },
    // Validation
    validationSchema: Yup.object({
      userName: Yup.string().required('User name is required'),
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('No password provided.'),
    }),
    // Submit form
    onSubmit: async values => {
      const cookies = new Cookies();
      const token = cookies.get('token');

      const loginData = await fetch(
        `${import.meta.env.VITE_BASE_API_PATH}/api/v1/admin/users/owner/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            owner: {
              contact: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                profile_pic: 'string',
              },
              auth_user: {
                username: values.userName,
                email: values.email,
                phone: values.phone,
                password: values.password,
                is_active: true,
                role: 'guest',
              },
            },
            init_subscription: monthValue,
          }),
        }
      );

      const response = await loginData.json();
      console.log(loginData, response);
      if (loginData.status === 200) {
        setSuccess('Account Creation Successful');
      } else {
        setError('Account Creation Unsuccessful');
      }
    },
  });

  return (
    <div className="flex flex-col  bg-white py-8 items-center gap-7 rounded-xl">
      <h2 className="text-4xl font-bold text-secondaryColor mb-3 text-center ">
        Generate New User :
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white gap-7  grid grid-cols-2"
      >
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          type="text"
          placeholder="Enter Name"
          className="border rounded-md px-3 py-2 focus:outline-primaryColor w-96"
        />
        <input
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          type="text"
          placeholder="Enter Username"
          className="border rounded-md px-3 py-2 focus:outline-primaryColor  w-96"
        />
        <input
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          type="text"
          placeholder="Enter Phone"
          className="border rounded-md px-3 py-2 focus:outline-primaryColor  w-96"
        />
        <input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          placeholder="Enter Password"
          className=" border rounded-md px-3 py-2 focus:outline-primaryColor w-96"
        />
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          placeholder="Enter Email"
          className="border col-span-2  rounded-md px-3 py-2 focus:outline-primaryColor"
        />
      </form>
      {/* slider */}
      <SliderC monthValue={monthValue} setMonthValue={setMonthValue} />
      {success && <Text>{success}</Text>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      <button
        type="submit"
        onClick={formik.handleSubmit}
        className="self-center mt-3 text-white   rounded-md px-20  py-2  bg-gradient-to-br from-tertiaryColor to-secondaryColor  w-96"
      >
        Generate
      </button>
    </div>
  );
};

export default GenerateUser;
