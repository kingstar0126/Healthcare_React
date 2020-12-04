
const JobsSearchBar = () => {
    return (
        <div className="relative">
            <input type="search" className="w-full text-gray-900 p-4 pl-12 focus:outline-none text-sm" placeholder="Search for any job, title, keywords or company"/>
            <div className="absolute search-icon top-5 left-5">
                <svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
            </div>
        </div>
    );
};

export default JobsSearchBar;
