const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
  next();
});
server.use(auth);
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
