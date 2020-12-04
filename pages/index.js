import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import JobsSearchBar from '../components/JobsSearchBar';
import JobsSideBar from '../components/JobsSideBar';
import JobsList from '../components/JobsList';
import { JobsService } from '../services/jobs.service';
import useDebounce from '../hooks/debounce';

const defaultFilters = {
  job_type: [],
  work_schedule: [],
  experience: [],
  department: [],
};

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [sortByKey, setSortByKey] = useState('location');

  const debouncedKeyword = useDebounce(keyword, 500);

  const [isFiltersLoading, setFiltersLoading] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const loadFilters = async () => {
    setFiltersLoading(true);
    try {
      const res = await JobsService.filters();
      setFilters(res);
    } catch (e) {
      console.log(e);
      // TODO: show toast
    } finally {
      setFiltersLoading(false);
    }
  };

  const [isJobsLoading, setJobsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);
  const loadJobs = async () => {
    setJobsLoading(true);
    try {
      const res = await JobsService.query(keyword, sortByKey);
      setJobs(res);
      setTotalJobCount(res.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0));
    } catch (e) {
      console.log(e);
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    loadFilters();
  }, []);

  useEffect(() => {
    loadJobs();
  }, [debouncedKeyword, sortByKey]);

  const showMoreDepartments = () => {
    // TODO: display departments dialog
  };

  return (
    <Layout>
      <div className="w-full pt-28">
        <section className="mt-2 mx-4">
          <JobsSearchBar keyword={keyword} onKeywordChange={setKeyword}/>
        </section>
        <section className="mt-4 mx-4 flex">
          <div className="w-64 hidden lg:block">
            <JobsSideBar jobTypes={filters.job_type}
                         departments={filters.department}
                         workSchedules={filters.work_schedule}
                         experiences={filters.experience}
                         onShowMoreDepartments={showMoreDepartments}
                         isLoading={isFiltersLoading}/>
          </div>
          <div className="ml-0 lg:ml-4 mb-4 w-full bg-white">
            <div className="mt-8 mx-2 flex justify-between text-sm">
              <div>
                <span className="font-bold">{totalJobCount.toLocaleString()} </span><span>job posting</span>
              </div>
              <div className="hidden lg:block space-x-4 flex justify-between">
                <span className="text-gray-600">Sort by</span>
                <button className="focus:outline-none" onClick={() => setSortByKey('location')}>Location</button>
                <button className="focus:outline-none" onClick={() => setSortByKey('role')}>Role</button>
                <button className="focus:outline-none" onClick={() => setSortByKey('department')}>Department</button>
                <button className="focus:outline-none" onClick={() => setSortByKey('education')}>Education</button>
                <button className="focus:outline-none" onClick={() => setSortByKey('experience')}>Experience</button>
              </div>
            </div>
            <JobsList jobs={jobs} isLoading={isJobsLoading}/>
          </div>
        </section>
      </div>
    </Layout>
  );
}
