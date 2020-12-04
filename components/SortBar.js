import React from 'react';
import SortButton from './SortButton';

const SortBar = ({ activeSortKey, setActiveSortKey, state, setState }) => {
  const onChange = (newState, key) => {
    setState(newState);
    setActiveSortKey(key);
  };

  return (
    <div className="hidden lg:block space-x-6 flex justify-between">
      <span className="text-gray-400">Sort by</span>
      <SortButton label="Location" state={state} setState={newState => onChange(newState, 'location')} sortKey="location" activeKey={activeSortKey}/>
      <SortButton label="Role" state={state} setState={newState => onChange(newState, 'role')} sortKey="role" activeKey={activeSortKey}/>
      <SortButton label="Department" state={state} setState={newState => onChange(newState, 'department')} sortKey="department" activeKey={activeSortKey}/>
      <SortButton label="Education" state={state} setState={newState => onChange(newState, 'education')} sortKey="education" activeKey={activeSortKey}/>
      <SortButton label="Experience" state={state} setState={newState => onChange(newState, 'experience')} sortKey="experience" activeKey={activeSortKey}/>
    </div>)
};

export default SortBar;
