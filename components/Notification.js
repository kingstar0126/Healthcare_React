import React from 'react';

const Notification = ({ color, type, message, onClose }) => {
  return (
    <div className="fixed right-5 top-5 z-30">
      <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 bg-${color}-500`}>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">{type}</b> {message}
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
          <span onClick={onClose}>×</span>
        </button>
      </div>
    </div>);
};

export default Notification;
