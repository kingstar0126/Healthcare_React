import React from "react";

import HospitalJobCard from "./HospitalJobCard";

const HospitalJobs = ({jobs}) => {
    return (<div className="border-b-1 border-gray-400">
        {jobs.map((job, index) => <HospitalJobCard job={job} key={index}/>)}
    </div>);
};

export default HospitalJobs;
