import React from "react";

import JobFilterCard from "./JobFilterCard";

const departmentDisplayCount = 10;

const JobsSideBar = ({ jobTypes, departments, workSchedules, experiences, isLoading, onShowMoreDepartments }) => {
    const departmentCount = departments.length;
    const departmentsToShow = departments.slice(0, Math.min(departmentDisplayCount, departmentCount));
    return (<div className="w-full">
        <JobFilterCard name="JOB TYPE" items={jobTypes}/>
        <JobFilterCard name="DEPARTMENT" items={departmentsToShow} hasMore={true} onShowMore={onShowMoreDepartments}/>
        <JobFilterCard name="WORK SCHEDULE" items={workSchedules}/>
        <JobFilterCard name="EXPERIENCE" items={experiences}/>
    </div>);
}

export default JobsSideBar;
