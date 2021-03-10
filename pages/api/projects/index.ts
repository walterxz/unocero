import { IncomingMessage, ServerResponse } from "http";
// import DB from '@database'

const allProjects = async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ hello: "Hello World" }));
};

export default allProjects;
