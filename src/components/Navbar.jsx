import { Outlet, useLocation } from 'react-router-dom';

// import logo from './logo.png';
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className={`bg-primaryColor flex justify-between px-24  text-white  py-5 items-center shadow-custom ${
          location.pathname === '/admin' && '2xl:px-52 xl:px-32'
        }`}
      >
        <img
          src="./logo.png"
          alt="picnic-logo"
          loading="lazy"
          className="object-contain w-32"
        />
        <div className="flex gap-10 items-center">
          <img
            src="/bell.svg"
            alt="Notification Icon"
            loading="lazy"
            className="bg-lightPrimaryColor p-2 rounded-md cursor-pointer"
          />
          <span>John</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
