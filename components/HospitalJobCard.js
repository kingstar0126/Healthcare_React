import React, { useState } from 'react';

import { weekDistance } from '../utils/date.util';
import HospitalJobDetail from './HospitalJobDetail';

const HospitalJobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (<div>
      <div className="border-t-2 border-gray-100 block md:flex justify-between items-center py-4 mt-4 text-gray-700" onClick={() => setExpanded(!expanded)}>
        <div>
          <div className="font-bold">{job.type}</div>
          <div>{job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} | {job.city}</div>
        </div>
        <div>{weekDistance(job.created)} weeks ago</div>
      </div>
      {expanded && <HospitalJobDetail job={job}/>}
    </div>
  );
};

export default HospitalJobCard;
