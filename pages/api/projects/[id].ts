import { NextApiRequest, NextApiResponse } from "next";
// import DB from '@database'

const allProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id;
  //   res.statusCode = 200;
  //   res.setHeader("Content-type", "application/json");
  //   res.end(JSON.stringify({ hello: "Hello World",id:id }));
  res.status(200).json({ hello: "Hello World", id: id });
};

export default allProjects;
