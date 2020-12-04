import React from "react";

import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
    return (<div className="w-full px-4 pt-8 cursor-pointer">
        {jobs.map((job, index) => <JobCard job={job} key={index}/>)}
    </div>);
}

export default JobsList;
