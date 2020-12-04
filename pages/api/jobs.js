// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs';

export default async (req, res) => {
  res.statusCode = 200;
  const keyword = req.query.keyword;
  const sort = req.query.sort;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json(jobs)
}
