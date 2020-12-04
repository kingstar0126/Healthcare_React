import React, {useState} from "react";

import {getCapsFromFullName} from "../utils/string.util";
import HospitalJobs from "./HospitalJobs";

const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="mb-4">
            <div className="flex font-sm items-center justify-left" onClick={() => setExpanded(!expanded)}>
                <div className="rounded-md bg-gray-400 font-bold text-white py-2 w-10 text-center mr-3">{getCapsFromFullName(job.job_title)}</div>
                <div>{job.total_jobs_in_hospital} jobs for {job.name}</div>
            </div>
            { expanded && <HospitalJobs jobs={job.items}/> }
        </div>
    );
}

export default JobCard;
