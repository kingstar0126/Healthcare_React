import { expect } from 'chai';
import { createMocks } from 'node-mocks-http';

import queryJobs from '../pages/api/jobs';

describe('/api/jobs', () => {
  it('should retrieve all jobs', async () => {
    const { req: request, res: response } = createMocks();
    const jobs = await queryJobs(request, response);
    const subTotal = jobs.reduce((sum, job) => sum + job.items.length, 0);
    expect(jobs.length).to.equal(20);
    expect(subTotal).to.equal(120);
  });

  it('should filter job items by keyword', async () => {
    const { req: request, res: response } = createMocks({ url: '/api/jobs?keyword=miller' });
    const jobs = await queryJobs(request, response);
    const subTotal = jobs.reduce((sum, job) => sum + job.items.length, 0);
    expect(subTotal).to.equal(9);
  });

  it('should sort job items by sort key and direction', async () => {
    const { req: request, res: response } = createMocks({ url: '/api/jobs?keyword=miller&sortKey=experience&sortDirection=asc' });
    const jobs = await queryJobs(request, response);
    const expectedResultExperienceSequence = ['Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Internship', 'Junior', 'Senior', 'Senior'];
    expect(jobs[0].items.map(jobItem => jobItem.experience)).to.deep.equal(expectedResultExperienceSequence);
  });
});
