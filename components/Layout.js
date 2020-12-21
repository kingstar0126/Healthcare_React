import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <div className="bg-gray-100">
    <Navbar/>
    <div className="container mx-auto">
      {props.children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
