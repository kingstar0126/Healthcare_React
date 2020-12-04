import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto block md:flex w-full p-8 space-x-0 md:space-x-2">
        <div className="w-full md:w-1/2">
          <h2 className="font-bold font-5xl mb-1">About us</h2>
          <p className="mb-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
          <p>All copyrights reserved © 2020 - Health Explore</p>
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h2 className="font-bold font-5xl mb-1">Sitemap</h2>
          <ul>
            <li><a className="mt-2" href="#">Nurses</a></li>
            <li><a className="mt-2" href="#">Employers</a></li>
            <li><a className="mt-2" href="#">Social networking</a></li>
            <li><a className="mt-2" href="#">Jobs</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h2 className="font-bold font-5xl mb-1">Privacy</h2>
          <ul>
            <li><a className="mt-2" href="#">Terms of use</a></li>
            <li><a className="mt-2" href="#">Privacy policy</a></li>
            <li><a className="mt-2" href="#">Cookie policy</a></li>
          </ul>
        </div>
      </div>
    </div>
);
};

export default Footer;
