// import Cookies from 'universal-cookie';

import { replace, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Button, InputRightElement, useToast } from '@chakra-ui/react';

import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useToastReact } from '../ToastProvider';

const Login = () => {
  localStorage.clear();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const showToast = useToastReact();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    // Validation
    validationSchema: Yup.object({
      userName: Yup.string().required('User name is required'),
      password: Yup.string().required('No password provided.'),
    }),
    // Submit form
    onSubmit: async values => {
      try {
        const loginData = await fetch(
          `${
            import.meta.env.VITE_BASE_API_PATH
          }/api/v1/auth/login/obtaintoken?username=${
            values.userName
          }&password=${values.password}`
        );
        const response = await loginData.json();
        if (loginData.status === 401) {
          throw new Error(
            JSON.stringify({ status: 400, message: response.detail })
          );
        }
        if (loginData.status === 400) {
          throw new Error(
            JSON.stringify({ status: 400, message: response.detail })
          );
        }
        const decoded = jwt_decode(response.auth_token);
        sessionStorage.setItem(
          'username',
          JSON.stringify({
            id: decoded.user.id,
            username: decoded.user.username,
            role: decoded.user.role,
          })
        );
        const cookies = new Cookies();
        cookies.set('token', response.auth_token);
        cookies.set('refreshtoken', response.refresh_token);
        navigate(`/${decoded.user.role === 'owner' ? 'chalet' : 'admin'}`, {
          replace: true,
        });
      } catch (err) {
        const errorObject = JSON.parse(err.message);
        console.log(errorObject);
        if (errorObject.status === 400)
          showToast({
            description: `${errorObject.message}`,
            title: 'Wrong credientials',
            status: 'error',
          });
        if (errorObject.status === 401)
          showToast({
            description: `${errorObject.message}`,
            title: 'User Subscription ended',
            status: 'error',
          });
      }
    },
  });
  const touchedPassword = formik.touched.password && formik.errors.password;
  const touchedEmail = formik.touched.userName && formik.errors.userName;
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white py-16 px-24 flex flex-col"
          display="flex"
        >
          <img
            src="./logo.svg"
            alt="logo"
            className="mb-3 text-lg font-medium"
          />
          <p className="text-center">Hello! Log in with your email.</p>
          <div className="mt-7 mb-5 flex gap-2 flex-col ">
            <label className="font-normal ">Email</label>
            <input
              required
              type="text"
              name="userName"
              placeholder="User name"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-md px-3 py-2 focus:outline-primaryColor"
            />
            {touchedEmail && (
              <span className="text-red-600">{formik.errors.userName}</span>
            )}
          </div>
          <div className="mt-3 mb-5 flex gap-2 flex-col ">
            <label className="font-normal relative flex flex-col">
              Password
              <input
                type={show ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                autoComplete="on"
                onBlur={formik.handleBlur}
                className="border rounded-md px-3 py-2 focus:outline-primaryColor text-base"
              />{' '}
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                position="absolute"
                right="5px"
                top="31px"
                colorScheme="teal"
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </label>
            {touchedPassword && (
              <span className="text-red-600">{formik.errors.password}</span>
            )}
          </div>
          <button
            className="self-center mt-3 text-white   rounded-md px-20 py-3 bg-gradient-to-br from-tertiaryColor to-secondaryColor"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
