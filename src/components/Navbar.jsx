import { Link, Outlet, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import Notifications from './Notifications';
import { Button } from '@chakra-ui/react';

// import logo from './logo.png';

const Navbar = ({ setLanguage }) => {
  const location = useLocation();
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
          {role === 'admin' ? (
            <Notifications />
          ) : (
            <img
              src="/bell.svg"
              alt="Notification Icon"
              loading="lazy"
              className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer"
            />
          )}

          <span>{username}</span>
          <Link to="/">
            <Button colorScheme="teal">Log Out</Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
