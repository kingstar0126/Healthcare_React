import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed bg-white w-full z-10">
      <div className="container mx-auto flex justify-between items-center w-full bg-white p-6">
        <div>
          <a href="#" className="text-blue-500 text-xl font-bold">HEALTH EXPLORER</a>
        </div>

        <ul className="lg:flex hidden lg:block space-x-3 lg:space-x-4 xl:space-x-8 text-gray-900">
          <li className="">
            <a className="font-bold no-underline" href="#">PROFILE</a>
          </li>
          <li className="">
            <a className="font-bold no-underline" href="#">JOBS</a>
          </li>
          <li className="">
            <a className="font-bold no-underline" href="#">PROFESSIONAL NETWORK</a>
          </li>
          <li className="">
            <a className="font-bold no-underline" href="#">LOUNGE</a>
          </li>
          <li className="">
            <a className="font-bold no-underline" href="#">SALARY</a>
          </li>
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
