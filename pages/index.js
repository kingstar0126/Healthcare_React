import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import JobsSearchBar from "../components/JobsSearchBar";
import JobsSideBar from "../components/JobsSideBar";
import JobsList from "../components/JobsList";
import {JobsService} from "../services/jobs.service";

const defaultFilters = {
    job_type: [],
    work_schedule: [],
    experience: [],
    department: [],
};

export default function Home() {
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
    useEffect(() => {
        loadFilters();
    }, []);

    const showMoreDepartments = () => {
      // TODO: display departments dialog
    };

    return (
        <Layout>
            <div className="w-full pt-28">
                <section className="mt-2 mx-4">
                    <JobsSearchBar/>
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
                    <div>
                        <JobsList/>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
