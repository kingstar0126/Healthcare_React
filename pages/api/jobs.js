// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs';
import { sortObjectArrayByKeyAndDirection } from '../../utils/array.util';

export default async (req, res) => {
  res.statusCode = 200;
  const keyword = (req.query.keyword || '').toLowerCase();
  const sortKey = req.query.sortKey;
  const sortDirection = req.query.direction; // 'asc' or 'desc'

  let jobsData = JSON.parse(JSON.stringify(jobs));
  jobsData.forEach(job => {
    // filter job items by job_title, hospital name and city name
    if (keyword !== '') {
      job.items = job.items.filter(jobItem => {
        if (jobItem.name.toLowerCase().indexOf(keyword) !== -1) { return true; }
        if (jobItem.job_title.toLowerCase().indexOf(keyword) !== -1) { return true; }
        if (jobItem.city.toLowerCase().indexOf(keyword) !== -1) { return true; }
        if (jobItem.type.toLowerCase().indexOf(keyword) !== -1) { return true; }
        return false;
      });
    }

    // sort items by location, role, department, education or experience
    if (!sortDirection) { return; }
    switch (sortKey) {
      case 'location':
        job.items = sortObjectArrayByKeyAndDirection(job.items, sortDirection, 'city');
        break;
      case 'role':
        // TODO: add sort by role here. there's no such field
        break;
      case 'department':
        // TODO: should be clarified. each job item has a list of departments and thus sorting items by `department` does not make sense
        break;
      case 'education':
        // TODO: same for this field.
        break;
      case 'experience':
        job.items = sortObjectArrayByKeyAndDirection(job.items, sortDirection, 'experience');
        break;
      default:
        console.log('switch fallback');
    }
  });

  jobsData = jobsData.filter(job => job.items.length);
  jobsData.forEach(job => job.total_jobs_in_hospital = job.items.length);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));
  res.json(jobsData)
}
