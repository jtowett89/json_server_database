const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({ noCors: false });

server.use(auth);
server.use(middlewares);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
server.use(router);

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
