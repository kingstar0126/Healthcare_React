import React, { useState } from 'react';

const Navbar = () => {
  const [showMobileNavMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="fixed bg-white w-full z-10">
      <div className="container mx-auto flex justify-between items-center w-full bg-white p-6 relative">
        <div className="flex align-items-center">
          <div className="flex items-center lg:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    id="main-menu" aria-haspopup="true" onClick={() => { setShowMobileMenu(!showMobileNavMenu); }}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          <a href="#" className="text-blue-500 text-xl font-bold pt-1 ml-2 md:ml-0">HEALTH EXPLORER</a>
        </div>

        { showMobileNavMenu && <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu" className="absolute left-8 top-20 bg-white border-2 w-60 rounded-xl lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1" role="none">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">PROFILE</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">JOBS</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">PROFESSIONAL NETWORK</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">LOUNGE</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">SALARY</a>
          </div>
        </div> }

        <ul className="lg:flex hidden lg:block space-x-3 lg:space-x-4 xl:space-x-8 text-gray-900">
          <li className=""><a className="font-bold no-underline" href="#">PROFILE</a></li>
          <li className=""><a className="font-bold no-underline" href="#">JOBS</a></li>
          <li className=""><a className="font-bold no-underline" href="#">PROFESSIONAL NETWORK</a></li>
          <li className=""><a className="font-bold no-underline" href="#">LOUNGE</a></li>
          <li className=""><a className="font-bold no-underline" href="#">SALARY</a></li>
        </ul>

        <div className="flex items-center justify-around space-x-4">
          <button className="hidden lg:block font-bold text-blue-500 border border-blue-400 rounded-lg px-4 py-2">CREATE JOB</button>
          <div className="relative cursor-pointer">
            <img alt="Avatar" src="https://eu.ui-avatars.com/api/?rounded=true&name=John%20Doe&background=3b82f6&color=fff&size=48"/>
            <span className="absolute -top-2 -right-2 rounded-2xl border-4 px-2 py-0 text-white text-center bg-red-500 border-white">2</span>
          </div>
          <a className="hidden lg:block font-bold no-underline" href="#">LOGOUT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
