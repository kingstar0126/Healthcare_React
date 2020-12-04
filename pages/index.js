import React from "react";

import Layout from "../components/Layout";
import JobsSearchBar from "../components/JobsSearchBar";
import JobsSideBar from "../components/JobsSideBar";
import JobsList from "../components/JobsList";

export default function Home() {
    const jobTypes = [
        {
            "key": "Per-Diem",
            "doc_count": 1991
        },
        {
            "key": "Traveler",
            "doc_count": 1976
        },
        {
            "key": "Part-time",
            "doc_count": 1938
        },
        {
            "key": "Full-time",
            "doc_count": 1848
        }];
    // TODO: change this to api call
  return (
      <Layout>
        <div className="w-full pt-28">
            <section className="mt-2 mx-4">
                <JobsSearchBar/>
            </section>
            <section className="mt-4 flex">
                <div className="w-80 hidden lg:block">
                    <JobsSideBar jobTypes={jobTypes}/>
                </div>
                <div>
                    <JobsList/>
                </div>
            </section>
        </div>
      </Layout>
  );
}
