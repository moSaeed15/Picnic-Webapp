import { Link, Outlet, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import Notifications from './Notifications';
import { Button } from '@chakra-ui/react';
import OwnerNotifications from './OwnerNotifications';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

// import logo from './logo.png';

const Navbar = ({ setLanguage, language }) => {
  const cookies = new Cookies();
  const location = useLocation();

  const refreshAccessToken = async () => {
    const refresh = cookies.get('refreshtoken');

    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_API_PATH
      }/api/v1/auth/login/refreshtoken?refresh_token=${refresh}`
    );
    const data = await response.json();
    cookies.set('token', data.auth_token);
    setTimeout(refreshAccessToken, 14 * 60 * 1000);
  };

  useEffect(() => {
    // Set a timer to refresh the access token after 14 minutes
    const refreshTokenTimer = setTimeout(refreshAccessToken, 14 * 60 * 1000);

    return () => clearTimeout(refreshTokenTimer);
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const { username, role } = JSON.parse(sessionStorage.getItem('username'));
  return (
    <>
      <nav
        className={`bg-primaryColor flex justify-between px-24  text-white  py-5 items-center shadow-custom ${
          (location.pathname === '/admin' ||
            location.pathname === '/placeholder') &&
          '2xl:px-52 xl:px-32'
        }`}
      >
        <img
          src="./logo.png"
          alt="picnic-logo"
          loading="lazy"
          className="object-contain w-32"
        />
        <div className="flex gap-10 items-center">
          <LanguageToggle setLanguage={setLanguage} />
          {role === 'admin' ? <Notifications /> : <OwnerNotifications />}

          <span>{username}</span>
          <Link to="/">
            <Button colorScheme="teal">
              {language === 'er' ? 'Log Out' : 'تسجيل خروج'}
            </Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
