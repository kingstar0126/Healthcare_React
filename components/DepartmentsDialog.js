import React from 'react';

const DepartmentsDialog = ({ departments, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center">
      <div className="w-5/6 md:w-4/5 bg-white rounded-lg">
        <div className="flex justify-between items-center border-b-2 border-grey-200 p-4 pr-6">
          <span className="font-bold text-3xl">Departments</span>
          <a href="#" className="font-bold text-3xl" onClick={() => { event.preventDefault(); onClose(); }}>×</a>
        </div>
        <div className="flex flex-wrap p-8">
          { departments.map((department, index) => <div className="w-full lg:w-1/4 mb-3" key={index}><span className="mr-2 text-sm">{department.key}</span><span
            className="text-gray-400 text-xs">{department.doc_count.toLocaleString()}</span></div>) }
        </div>
      </div>
    </div>
  );
};

export default DepartmentsDialog;
