import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import JobsSearchBar from '../components/JobsSearchBar';
import JobsSideBar from '../components/JobsSideBar';
import JobsList from '../components/JobsList';
import { JobsService } from '../services/jobs.service';
import useDebounce from '../hooks/debounce';
import Spinner from '../components/Spinner';
import DepartmentsDialog from '../components/DepartmentsDialog';
import SortBar from '../components/SortBar';
import Notification from '../components/Notification';

const defaultFilters = {
  job_type: [],
  work_schedule: [],
  experience: [],
  department: [],
};

const defaultNotification = {
  show: false,
  type: 'error',
  message: '',
};

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 500);
  const [activeSortKey, setActiveSortKey] = useState(null);
  const [sortState, setSortState] = useState('asc');

  const [notification, setNotification] = useState(defaultNotification);

  const [isDepartmentDialogOpen, setDepartmentDialogOpen] = useState(false);

  const [isFiltersLoading, setFiltersLoading] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const loadFilters = async () => {
    setFiltersLoading(true);
    try {
      const res = await JobsService.filters();
      setFilters(res);
    } catch (e) {
      showNotification('error', 'Failed to fetch data from the server.');
    } finally {
      setFiltersLoading(false);
    }
  };

  const [isJobsLoading, setJobsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);
  const loadJobs = async () => {
    setJobsLoading(true);
    try {
      const res = await JobsService.query(keyword, activeSortKey, sortState);
      setJobs(res);
      setTotalJobCount(res.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0));
    } catch (e) {
      showNotification('error', 'Failed to fetch data from the server.');
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    loadFilters();
  }, []);

  useEffect(() => {
    loadJobs();
  }, [debouncedKeyword, activeSortKey, sortState]);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
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
                         onShowMoreDepartments={() => setDepartmentDialogOpen(true)}
                         isLoading={isFiltersLoading}/>
          </div>
          <div className="ml-0 lg:ml-4 mb-4 w-full bg-white">
            <div className="mt-8 ml-4 mr-8 flex justify-between text-sm">
              <div>
                <span className="font-bold">{totalJobCount.toLocaleString()} </span><span>job postings</span>
              </div>
              <SortBar state={sortState} activeSortKey={activeSortKey} setState={setSortState} setActiveSortKey={setActiveSortKey}/>
            </div>
            { isJobsLoading ? <div className="flex justify-center items-center h-48"><Spinner size={10}/></div> : <JobsList jobs={jobs}/> }
          </div>
        </section>
      </div>
      { isDepartmentDialogOpen && <DepartmentsDialog departments={filters.department} onClose={() => setDepartmentDialogOpen(false)}/> }
      { notification.show && <Notification {...notification} onClose={() => setNotification({ show: false })}/> }
    </Layout>
  );
}
