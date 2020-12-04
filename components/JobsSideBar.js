const JobsSideBar = (props) => {
    return (<div className="w-full">
        <div>
            <p className="font-bold">JOB TYPE</p>
            { props.jobTypes.map(jobType => (<div>
                <span className="mr-2">{jobType.key}</span><span className="font-grey-700">{jobType.doc_count}</span>
            </div>)) }
        </div>
    </div>);
}

export default JobsSideBar;
