import React from 'react';

const ArrowUp = () => (<svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
</svg>);

const ArrowDown = () => (<svg className="fill-current pointer-events-none text-gray-800 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
</svg>);

const SortButton = ({ label, className = '', state, setState, sortKey, activeKey }) => {

  const cycleState = () => {
    if (activeKey !== sortKey) {
      setState('asc');
      return;
    }
    if (!state) { setState('asc'); }
    if (state === 'asc') { setState('desc'); }
    if (state === 'desc') { setState(null); }
  };

  return (<button className={`${className} focus:outline-none relative`} onClick={() => cycleState()}>
    {label}
    <div className="absolute search-icon -right-4 top-0.5">
    <span>{ activeKey === sortKey && state === 'asc' && <ArrowDown/> }
      { activeKey === sortKey && state === 'desc' && <ArrowUp/> }</span>
    </div>
  </button>);
}

export default SortButton;
