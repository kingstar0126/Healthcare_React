import React from "react";

const HospitalJobDetail = ({ job }) => {
    return (<div className="mt-4 text-gray-700">
        <div className="flex">
            <div className="w-1/2 font-bold">Department:</div>
            <div className="w-1/2">{job.department.join(', ')}</div>
        </div>
        <div className="flex mt-3">
            <div className="w-1/2 font-bold">Hours / shifts:</div>
            <div className="w-1/2"> {job.hours[0]} hours / {job.work_schedule}</div>
        </div>
        <div className="flex mt-3">
            <div className="w-1/2 font-bold">Summary</div>
            <div className="w-1/2"> {job.description}</div>
        </div>
    </div>);
};

export default HospitalJobDetail;
