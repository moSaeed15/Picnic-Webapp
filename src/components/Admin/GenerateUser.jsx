import { ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import SliderC from './SliderC';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import {
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Text,
  Input,
  FormControl,
  Flex,
} from '@chakra-ui/react';
import { useToastReact } from '../../ToastProvider';

const GenerateUser = ({ language }) => {
  const [monthValue, setMonthValue] = useState('monthly');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const showToast = useToastReact();

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
      userName: Yup.string().required(
        language === 'en' ? 'User name is required' : 'اسم المستخدم مطلوب'
      ),
      email: Yup.string().required(
        language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'
      ),
      phone: Yup.string()
        .matches(
          /^\+965\d{8}$/,
          language === 'en'
            ? 'Phone number must start with +965 and be followed by 8 numbers'
            : 'يجب أن يبدأ رقم الهاتف ب +965 ويتبعه 8 أرقام'
        )
        .required(
          language === 'en' ? 'Phone number is required' : 'رقم الهاتف مطلوب'
        )
        .min(11, 'number consists of at least 11 numbers'),
      password: Yup.string().required(
        language === 'en' ? 'No password provided.' : 'كلمة المرور مطلوبة'
      ),
    }),
    // Submit form
    onSubmit: async values => {
      console.log(values);
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
      if (loginData.status === 200) {
        setSuccess(
          language === 'en'
            ? 'Account Creation Successful'
            : 'تم إنشاء الحساب بنجاح'
        );
        showToast({
          description: 'User Generation Successful',
          title: 'Account Generation Successful',
          status: 'success',
        });
      } else {
        showToast({
          description: response.detail,
          title: 'Account Generation Failed',
          status: 'error',
        });
      }
    },
  });
  const touchedPhone = formik.touched.phone && formik.errors.phone;

  return (
    <div className="flex flex-col  bg-white py-8 items-center gap-7 rounded-xl">
      <h2 className="text-4xl font-bold text-secondaryColor mb-3 text-center ">
        {language === 'en' ? 'Generate New User :' : 'إنشاء مستخدم جديد :'}
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
          placeholder={language === 'en' ? 'Enter Name' : 'أدخل الاسم'}
          className="border rounded-md px-3 py-2 focus:outline-primaryColor w-96"
        />
        <input
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          type="text"
          placeholder={
            language === 'en' ? 'Enter Username' : 'أدخل اسم المستخدم'
          }
          className="border rounded-md px-3 py-2 focus:outline-primaryColor  w-96"
        />
        <Flex flexDir="column">
          <Input
            maxLength="12"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder={language === 'en' ? 'Enter Phone' : 'أدخل رقم الهاتف'}
            className=" rounded-md px-3 py-2   w-96"
            focusBorderColor="#2F6A77"
          />
          {touchedPhone && (
            <Text maxW="380px" color="red.500">
              {formik.errors.phone}
            </Text>
          )}
        </Flex>
        <input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
          placeholder={
            language === 'en' ? 'Enter Password' : 'أدخل كلمة المرور'
          }
          className=" border rounded-md px-3 py-2 focus:outline-primaryColor w-96 self-start"
        />
        <input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          placeholder={
            language === 'en' ? 'Enter Email' : 'أدخل البريد الإلكتروني'
          }
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
        {language === 'en' ? 'Generate' : 'إنشاء'}
      </button>
    </div>
  );
};

export default GenerateUser;
